import LTAAPI from "./LTAParkRateAPI";

async function LTAParkRate (CarParkID){
    let LTARateData = [];

    const { status, data } = await LTAAPI.get(`/Result?CarParkID=${CarParkID}`);
    if ( status === 200 ) {
        console.log("data", data);

        LTARateData.push({
            "timeslot" : `Weekdays Daytime`,
            "parkRate" : `${data[0].WeekDays_Rate_1}`
        })

        LTARateData.push({
            "timeslot" : `Weekdays Evening Onwards`,
            "parkRate" : `${data[0].WeekDays_Rate_2}`
        })

        LTARateData.push({
            "timeslot" : `Saturdays`,
            "parkRate" : `${data[0].Saturday_Rate}`
        })

        LTARateData.push({
            "timeslot" : `Sunday and PH`,
            "parkRate" : `${data[0].Sunday_PublicHoliday_Rate}`
        })
    }
 
    //console.log("LTARateData before return", LTARateData);
    return LTARateData;  
}

export default LTAParkRate;
