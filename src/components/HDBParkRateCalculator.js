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


// The Parking rate at HDB is dependent on whether

// 1) They parking lot has night parking or not. --- NEED API data
//  If there is night parking, then its capped at $5 per night (10:30pm to 7:00am on the following day)

// 2) Whether they have Free Parking --- NEED API data
// If there is free parking, need to indicate the hours.

// 3) Whether they are in Central Area.
// if central, then its:	
// $1.20 per half-hour (7:00am to 5:00pm, Monday to Saturday)
// $0.60 per half hour (Other hours)

