import { useEffect, useState } from 'react';
import './App.css';
import mockedData from "./LTACarparkData.json";
import getNearestCarparks from './component/nearestCarpark';
import carparkData from './carparkData';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import AppContent from "./component/appContent";

function App() {

  let [userInput, setUserInput] = useState({latitude:"", longitude:""})
  let [userLoc, setUserLoc] = useState({});
  let [carparksData, setCarparksData] = useState([]);
  let [carparksLoc, setCarparksLoc] = useState([]);
  let [nearestCarpark, setNearestCarpark] = useState([]);
  let [favoriteCarpark, setNFavoriteCarpark] = useState([]);


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


   function handleInput(event){

     let input = {...userInput};

     console.log(event.target.id);

     if (event.target.value==="" || (/^\d+\.?\d*$/).test(event.target.value)){

      input[event.target.id]=event.target.value;

      setUserInput(input);
    }

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
    <BrowserRouter>
    
      <div className="App">
        <h1>Where Can Park</h1>
        <form onSubmit={(event)=>{
          event.preventDefault();
          setUserLoc(userInput);
        }}>
          <label htmlFor="latitude">Latitude</label>
          <input type="text" id="latitude" value={userInput.latitude} onChange={handleInput}></input><br />
          <label htmlFor="longitude">Longitude</label>
          <input type="text" id="longitude" value={userInput.longitude} onChange={handleInput}></input><br />
          <button type="submit">Search</button>
        </form>
        <nav className="App-nav">
            <div>
              <Link to="/favorites">Favourites</Link>
            </div>
            <div>
              <Link to="/nearest">Nearest</Link>
            </div>
          </nav>
          <div className="App-content">
            <Switch>
              <Route path="/:id">
                <AppContent nearestCarpark={nearestCarpark} favoriteCarpark={favoriteCarpark}/>
              </Route>
            </Switch>
        {/* <DisplayCarparks carpark={nearestCarpark}/> */}
          </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
