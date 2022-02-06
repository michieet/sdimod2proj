import {useParams} from 'react-router-dom';
import {useState} from 'react';

function AppContent(props){

    const {id} = useParams();
    const {nearestCarpark, favoriteCarpark, setUserLoc} = props;
    let [userInput, setUserInput] = useState({latitude:"", longitude:""})

    console.log(props.nearestCarpark);


    function handleInput(event){

        let input = {...userInput};
   
        console.log(event.target.id);
   
        if (event.target.value==="" || (/^\d+\.?\d*$/).test(event.target.value)){
   
         input[event.target.id]=event.target.value;
   
         setUserInput(input);
       }
   
      }

    function DisplayCarpark(carpark){
        return(
            <div key={carpark.Agency+carpark.CarParkID+carpark.Location+carpark.LotType} className="card">
                <div className="icons">
                    <div>♥</div><div>$</div>
                </div>
                <h2>
                    {carpark.AvailableLots} , {carpark.LotType}
                </h2>
                <h3>
                    {carpark.Development}
                </h3>
                <h4>{carpark.Agency}</h4>

            </div>
        )
    }


    function DisplayList(){
        let carparkList;

        if (id==="nearest"){
            console.log("nearest selected");
            console.log(nearestCarpark);
            if (nearestCarpark.length !== 0){
                nearestCarpark.sort((a,b)=>-(a.AvailableLots - b.AvailableLots));
                carparkList = nearestCarpark.map(DisplayCarpark);
            } else{
                carparkList = <div>No carpark found within 1km</div>;
            }
        } else if (id==="favorites"){
            console.log("favorites selected");
            console.log(favoriteCarpark);
            if (favoriteCarpark.length !== 0){
                carparkList = favoriteCarpark.map(DisplayCarpark);
            }else{
                carparkList = <div>No favaourite carpark saved</div>;                
            }
        }

        return carparkList;
    }

    return(
        <>

            { id==="nearest"?
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    setUserLoc(userInput);
                }}>
                    <label htmlFor="latitude">Latitude</label>
                    <input type="text" id="latitude" value={userInput.latitude} onChange={handleInput}></input><br />
                    <label htmlFor="longitude">Longitude</label>
                    <input type="text" id="longitude" value={userInput.longitude} onChange={handleInput}></input><br />
                    <button type="submit">Search</button>
                </form> : ""
            }

            <div className="display-container">
                {DisplayList()}
            </div>
        </>
    )

}

export default AppContent;