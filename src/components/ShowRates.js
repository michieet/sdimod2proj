import URAParkRate from "./URAParkRate";
import LTAParkRate from "./LTAParkRate";
import HDBParkRate from "./HDBParkRate";
import DisplayRateData from "./DisplayRateData";
import { useState } from 'react';
import _ from "lodash";

// props need to be an object that includes keys of CarparkID and Agency info

function ShowRates (props){

    let parkRateInfo;
    const [parkRateData, setParkRateData] = useState([]);

    console.log(props.carparkInfo.Agency.toUpperCase());
    console.log(props.carparkInfo.CarParkID);

    switch(props.carparkInfo.Agency.toUpperCase()){
        case "LTA":
            (async () => {
                parkRateInfo = await LTAParkRate(props.carparkInfo.CarParkID);
                console.log("parkRateInfo", parkRateInfo);
                if( !(_.isEqual(parkRateData,parkRateInfo))){
                    setParkRateData(parkRateInfo);
                };
            })();
            break;
        case "URA":
            (async () => {
                parkRateInfo = await URAParkRate(props.carparkInfo.CarParkID);
                console.log("parkRateInfo", parkRateInfo);
                if( !(_.isEqual(parkRateData,parkRateInfo))){
                    setParkRateData(parkRateInfo);
                };
            })();
            break;
        case "HDB":
            (async () => {
                parkRateInfo = await HDBParkRate(props.carparkInfo.CarParkID);
                console.log("parkRateInfo", parkRateInfo);
                if( !(_.isEqual(parkRateData,parkRateInfo))){
                    setParkRateData(parkRateInfo);
                };
            })();
            break;

        default:
            console.log("No relevant source available.");
            break;
    }

    console.log("parkRateData", parkRateData);
    return (
        <>
            <h1>{props.carparkInfo.Development}</h1>
            <DisplayRateData rateData={parkRateData} />
        </>
        
    )

}

export default ShowRates;





// Notes:

// let the parkRateData be an array of objects.
// example: parkRateData = [
//     {
//         "timeslot" : "Weekdays 7:00am to 10:30pm",
//         "parkRate" : "$0.60 per half hour"
//     },
//     {
//         "timeslot" : "Weekdays Night 10:30pm to 7:00am the following day",
//         "parkRate" : "$0.60 per half hour capped at $5 per night"
//     }
// ];
// then just keep adding objects and print it in that order.