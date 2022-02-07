function DisplayRateData (props){

    console.log("rateData", props.rateData);
  
    return (
        <>
            <table>
                {props.rateData.map((o)=>{
                    return (
                        <tr>
                            <th className="timeslot">{o.timeslot}</th>
                            <th className="parkRate">{o.parkRate}</th>
                        </tr>
                    );
                })}
            </table>   
        </>
    )

}

export default DisplayRateData;