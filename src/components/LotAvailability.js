import './LotAvailability.css';
import React, {useState, useEffect}from 'react';
import { uniqueId } from 'lodash';
import API from '../API/API';
import colorIcon from './colorIcon';


export default function LotAvailability(props) {
    const {data} = props;
    const [lotData, setLotData] = useState([]);

    const getData = async () => {
      const {status, data} = await API.get('/data');
      if (status === 200) {
        setLotData(data);
      };
    };
    // console.log(data);

    useEffect( () => {
        console.log('App.useEffect mounted')
        getData();
      },[]);

    const defaultData = lotData.map(object => {
        return {...object, Carpark: false};
    });
    console.log("Carpark Data", defaultData);    

    return (
        <>
        <div>
            <h1>Available Lots</h1>
            <h4>
            {
                lotData.map( r =>
                    <div key={uniqueId('main')}>
                        <h4>{r.CarParkID}</h4>
                        <h4>Area: {r.Area}</h4>
                        <h4>Location: {r.Location}</h4>
                        <h4>Available Lots: {r.AvailableLots}{colorIcon(lotData)}</h4>
                    </div>
                    )}
            </h4>
        </div>
        </>
    )
};