import {getDistance} from "geolib";
const {svy21ToWgs84} =require ("../../node_modules/svy21/index.js");

function getNearestCarparks(userLoc, carparksLoc, setNearestCarpark){
    
    function checkCurr(){
        console.log("checking loc..");
        console.log(userLoc);
        if (userLoc.latitude> 1.48 || userLoc.latitude <1.15){
            setNearestCarpark("OOB");
            return false;
        };
        if (userLoc.longitude> 104.06 || userLoc.longitude <103.59){
            setNearestCarpark("OOB");
            return false;
        };
        console.log("Location within boundaries");
        return true;

    }

    function getNearestCarparks(){

        console.log(carparksLoc.filter(isCarparkWithinDistance).length);


        if (userLoc && carparksLoc.length >0 && carparksLoc.filter(isCarparkWithinDistance).length===0 ){

            setNearestCarpark(false)

        }else{
            setNearestCarpark(carparksLoc.filter(isCarparkWithinDistance));
        }
     }

     function isCarparkWithinDistance(carpark){

        let carpark_loc = {
            latitude:svy21ToWgs84(parseFloat(carpark.y_coord), parseFloat(carpark.x_coord))[0],
            longitude:svy21ToWgs84(parseFloat(carpark.y_coord), parseFloat(carpark.x_coord))[1],
        };

        let user_loc = {
            latitude: userLoc.latitude,
            longitude: userLoc.longitude,
        };

        return(
            getDistance(carpark_loc, user_loc) < 1000
        )

     }


    if(checkCurr()){ 
        getNearestCarparks();
    }else if (!userLoc){
        setNearestCarpark([]);
    }


}

export default getNearestCarparks;