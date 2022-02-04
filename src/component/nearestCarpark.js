import {getDistance} from "geolib";

function getNearestCarparks(userLoc, carparksLoc, setNearestCarpark){
    
    function checkCurr(){
        console.log("checking loc..")
        if (userLoc.latitude> 1.48 || userLoc.latitude <1.15){
            throw new Error (`latitude: ${userLoc.latitude} is out of bound`);
        };
        if (userLoc.longitude> 104.06 || userLoc.longitude <103.59){
            throw new Error (`longitude: ${userLoc.longitude} is out of bound`);
        };
        console.log("Location within boundaries")

    }
    

    function getNearestCarparks(){

         console.log(carparksLoc);

         setNearestCarpark(carparksLoc.filter(isCarparkWithinDistance));
     }

     function isCarparkWithinDistance(carpark){

        console.log(carpark.latitude, carpark.longitude, userLoc.latitude, userLoc.longitude)

        let carpark_loc = {
            latitude:carpark.latitude,
            longitude:carpark.longitude,
        };

        let user_loc = {
            latitude: userLoc.latitude,
            longitude: userLoc.longitude,
        };

        console.log(getDistance(carpark_loc, user_loc) < 1000);

        return(
            getDistance(carpark_loc, user_loc) < 1000
        )

     }


     checkCurr();
     getNearestCarparks();



}

export default getNearestCarparks;