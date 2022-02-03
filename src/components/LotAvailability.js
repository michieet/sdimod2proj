import './LotAvailability.css';
import React from 'react';

export default function LotAvailability(props) {
    const {data} = props;
    console.log(data);

    return (
        <>
        <div>
            <h1>Available Lots</h1>
            <h4>{data.CarParkID}</h4>
            Area: {data.Area} <br/>
            Location: {data.Location} <br/>
            Available Lots: {data.AvailableLots} <br/>
        </div>
        </>
    )
};