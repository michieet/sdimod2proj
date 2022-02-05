import URAParkRateAPI from "./URAParkRateAPI";
import LTAParkRateAPI from "./LTAParkRateAPI";
import HDBParkRate from "./HDBParkRate";
import DisplayRateData from "./DisplayRateData";
import { useState , useEffect } from 'react';
import _ from "lodash";

// props need to be an object that includes keys of CarparkID and Agency info

function ShowRates (props){

    let parkRateInfo;
    const [parkRateData, setParkRateData] = useState([]);

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

    console.log(props.carparkInfo.Agency.toUpperCase());
    console.log(props.carparkInfo.CarParkID);

    switch(props.carparkInfo.Agency.toUpperCase()){
        case "LTA":
            console.log(props.carparkInfo.CarParkID);
            break;
        case "URA":
            console.log(props.carparkInfo.CarParkID);
            break;
        case "HDB":
            parkRateInfo = HDBParkRate(props.carparkInfo.CarParkID);
            console.log("parkRateInfo", parkRateInfo);
            // setParkRateData(parkRateInfo);
            if( !(_.isEqual(parkRateData,parkRateInfo))){
                setParkRateData(parkRateInfo);
            };
            break;
        default:
            console.log("No relevant source available.");
            break;
    }

    // useEffect(() => {
    //     switch(props.carparkInfo.Agency.toUpperCase()){
    //         case "LTA":
    //             console.log(props.carparkInfo.CarParkID);
    //             break;
    //         case "URA":
    //             console.log(props.carparkInfo.CarParkID);
    //             break;
    //         case "HDB":
    //             parkRateInfo = HDBParkRate(props.carparkInfo.CarParkID);
    //             // setParkRateData(parkRateInfo);
    //             if( !(_.isEqual(parkRateData,parkRateInfo))){
    //                 setParkRateData(parkRateInfo);            
    //             };
    //             break;
    //         default:
    //             console.log("No relevant source available.");
    //             break;
    //     }
    //   });
  

    console.log("parkRateData", parkRateData);
    return <DisplayRateData rateData={parkRateData} />;

}

export default ShowRates;