import URAAPI from "./URAParkRateAPI";

async function URAParkRate (CarParkID){
    let URARateData = [];

    const { status, data } = await URAAPI.get(`/Result?ppCode=${CarParkID}`);
    if ( status === 200 ) {
        console.log("data", data);

        data.forEach((e) =>{

            if (e.vehCat === "Car"){
                URARateData.push({
                    "timeslot" : `Weekdays ${e.startTime} to ${e.endTime}`,
                    "parkRate" : `${e.weekdayRate} per ${e.weekdayMin}`
                })
                URARateData.push({
                    "timeslot" : `Saturdays ${e.startTime} to ${e.endTime}`,
                    "parkRate" : `${e.satdayRate} per ${e.satdayMin}`
                })
                URARateData.push({
                    "timeslot" : `Sundays and PH ${e.startTime} to ${e.endTime}`,
                    "parkRate" : `${e.sunPHRate} per ${e.sunPHMin}`
                })
            }       
        })
    }
 
    //console.log("URARateData before return", URARateData);
    return URARateData;  
}

export default URAParkRate;