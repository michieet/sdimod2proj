import './App.css';
import LotAvailability from './components/LotAvailability';
import {API} from './API/API';
import {useState, useEffect} from 'react'



function App() {

  const [lotData, setLotData] = useState([]);

  const getData = async (lotData) => {
    const {status, data} = await API.get(`https://api.data.gov.sg/v1/transport/carpark-availability${lotData}`);
    if (status === 200) {
      console.log('Carpark lot data:', data);
      const d = data[0];
      const tempObj = {
        CarParkID: d.CarParkID,
        Area: d.Area,
        Location: d.Location,
        AvailableLots: d.AvailableLots
      };
      setLotData(tempObj);
    } else {
      console.log('Error');
    };
  };

  useEffect( () => {
    console.log('App.useEffect mounted')
    if (lotData)
      getData(lotData)
  },[lotData]);

  return (
    <>
      <div className="App">
        <LotAvailability data={lotData}/>
      </div>
    </>
  );
};

export default App;
