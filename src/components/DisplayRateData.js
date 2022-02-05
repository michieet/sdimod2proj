function DisplayRateData (props){

    console.log("rateData", props.rateData);
  
    return (
        <>
            <table>
                {props.rateData.map((o)=>{
                    return (
                        <tr>
                            <th>{o.timeslot}</th>
                            <th>{o.parkRate}</th>
                        </tr>
                    );
                })}
            </table>   
        </>
    )

}

export default DisplayRateData;