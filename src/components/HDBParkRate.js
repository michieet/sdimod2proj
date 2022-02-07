import HDBAPI from './HDBParkAPI.js'

function IsInCentralHDB(CarParkID){
    let centralArea = false;

    switch(CarParkID){
        case 'ACB':
        case 'BBB':
        case 'BRB1':
        case 'CY':
        case 'DUXM':
        case 'HLM':
        case 'KAB':
        case 'KAM':
        case 'KAS':
        case 'PRM':
        case 'SLS':
        case 'SR1':
        case 'SR2':
        case 'TPM':
        case 'UCS':
        case 'WCB':
            centralArea = true;
            break;
        default:
            break;
    }

    return centralArea;
}

async function HDBParkRate(CarParkID){
    let HDBRateData;
    
    const centralAreaParkRate = [
        {
            "timeslot" : "Weekdays & Saturday 7:00am to 5:00pm",
            "parkRate" : "$1.20 per half hour"
        },
        {
            "timeslot" : "Weekdays & Saturday 5:00pm to 10:30pm",
            "parkRate" : "$0.60 per half hour"
        },
    ];

    const regularDayParkRate = [
        {
            "timeslot" : "Daily 7:00am to 10:30pm",
            "parkRate" : "$0.60 per half hour"
        }
    ];

    const nightParkRate = {
            "timeslot" : "Night Parking 10:30pm to 7:00am the following day",
            "parkRate" : "$0.60 per half hour capped at $5 per night"
    };

    const noNightPark = {
            "timeslot" : "Night Parking 10:30pm to 7:00am the following day",
            "parkRate" : "No Parking"
    };

    const { status, data } = await HDBAPI.get(`/Result?car_park_no=${CarParkID}`);
    if ( status === 200 ) {
    
        console.log(data);

        // Check if carpark is in central area.
        if (IsInCentralHDB(CarParkID)){
            HDBRateData = centralAreaParkRate;
        } else {
            HDBRateData = regularDayParkRate;
        }

        // Check if carpark has night parking.
        //console.log(data[0].night_parking);
        if (data[0].night_parking === "YES"){
            HDBRateData.push(nightParkRate);
        } else {
            HDBRateData.push(noNightPark);
        }

        // Check & populate the free parking details.
        //console.log(data[0].free_parking);
        if (!(data[0].free_parking === "NO")){
            const freeParkDetails = {
                    "timeslot" : data[0].free_parking,
                    "parkRate" : "Free Parking"
            };

            HDBRateData.push(freeParkDetails);
        }
    }

 

    //console.log("HDBRateData before return", HDBRateData);
    return HDBRateData;    
}

export default HDBParkRate;

// The Parking rate at HDB is dependent on whether

// 1) They parking lot has night parking or not. --- NEED API data
//  If there is night parking, then its capped at $5 per night (10:30pm to 7:00am on the following day)

// 2) Whether they have Free Parking --- NEED API data
// If there is free parking, need to indicate the hours.

// 3) Whether they are in Central Area.
// if central, then its:	
// $1.20 per half-hour (7:00am to 5:00pm, Monday to Saturday)
// $0.60 per half hour (Other hours)

