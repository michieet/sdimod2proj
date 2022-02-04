import { useEffect, useState } from 'react';
import './App.css';
import mockedData from "./LTACarparkData.json";
import getNearestCarparks from './component/nearestCarpark';
import carparkData from './carparkData';

function App() {

  let [userLoc, setUserLoc] = useState({});
  let [carparksData, setCarparksData] = useState([]);
  let [carparksLoc, setCarparksLoc] = useState([]);
  let [nearestCarpark, setNearestCarpark] = useState([]);


  // useEffect(()=>{

  // })

  function retrieveCarparkData (){
    console.log("Getting data...");

    let data;

    data = mockedData.value;

    return data;

    // carparkData.get("/CarParkAvailabilityv2").then(
    //     res=>{
    //         if (res.status===200){
    //             data = res.data.value;
    //             console.log("Data received");
    //         }
    //     }
    // ).catch(err=>{
    //     console.log(err.message);
    //     data = mockedData.value;
    // })

      
      
  }

  function setCarparksLocData(data){

    data.forEach(carpark=>{
    carpark["latitude"] = carpark.Location.split(' ')[0];
    carpark["longitude"] = carpark.Location.split(' ')[1];
    })

    setCarparksLoc(data);
   }


   useEffect(()=>{

      let data = retrieveCarparkData();

      setCarparksData(data);

      setCarparksLocData(data);

      setUserLoc({latitude:"1.308990", longitude:"103.854340" });

   },[])


   useEffect(()=>{
     getNearestCarparks(userLoc, carparksLoc, setNearestCarpark)
   }, [userLoc, carparksLoc])




  
  return (

    <div className="App">
      {console.log(nearestCarpark)}
      {/* <NearestCarparks userLoc={userLoc} carparksLoc={carparksLoc} setNearestCarpark={setNearestCarpark} /> */}
    </div>
  );
}

export default App;
