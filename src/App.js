import './App.css';
import LotAvailability from './components/LotAvailability';
import API from './API/API.js';
import React, {useState, useEffect} from 'react';


function App() {

  const [lotData, setLotData] = useState([]);

  const getData = async () => {
    const {status, data} = await API.get('/data');
    if (status === 200) {
      setLotData(data);
      console.log('Carpark lot data:', data);
    };
  };
  

  // const getData = async (lotData) => {
  //   const {status, data} = await API.get(`/ltaodataservice/CarParkAvailabilityv2?`);
  //   if (status === 200) {
  //     console.log('Carpark lot data:', data);
  //     const d = data[0];
  //     const tempObj = {
  //       CarParkID: d.CarParkID,
  //       Area: d.Area,
  //       Location: d.Location,
  //       AvailableLots: d.AvailableLots
  //     };
  //     setLotData(tempObj);
  //   } else {
  //     console.log('Error');
  //   };
  // };

  useEffect( () => {
    console.log('App.useEffect mounted')
    getData();
  },[]);

  return (
    <>
      <div className="App">
        <LotAvailability data={lotData}/>
      </div>
    </>
  );
};

export default App;
