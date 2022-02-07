import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import mockedData from "../LTACarparkData.json";
import getNearestCarparks from './nearestCarpark';
import carparkData from '../carparkData';
import PostalcodeInput from '../PostalcodeInput';
import ShowRates from '../components/ShowRates';
import ColorIcon from '../components/colorIcon';

function AppContent(){

    const {id} = useParams();
    //const {nearestCarpark, favoriteCarpark, setUserLoc} = props;
    let [userInput, setUserInput] = useState({latitude:"", longitude:""});

    let [userLoc, setUserLoc] = useState({latitude:"", longitude:"" });
    let [carparksLoc, setCarparksLoc] = useState([]);
    let [nearestCarpark, setNearestCarpark] = useState([]);
    let [favoriteCarpark, setFavoriteCarpark] = useState([]);
  
  
    function retrieveCarparkData (){
      console.log("Getting data...");
  
      let data;
  
      data = mockedData.value;

      data = data.filter(carpark=>carpark.LotType==="C")

      setCarparksLocData(data);
  
  
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

        console.log(userInput);
        if((id==="nearest" && userLoc.latitude && userLoc.longitude)||(id==="favorites")){

            let update = setInterval(retrieveCarparkData,5000);
        
        return(
            ()=>{clearInterval(update)}
        )
        }
  
     },[userLoc, carparksLoc])
  
  
     useEffect(()=>{
       getNearestCarparks(userLoc, carparksLoc, setNearestCarpark)
     }, [userLoc, carparksLoc])
  
  


    // function handleInput(event){

    //     let input = {...userInput};
   
    //     console.log(event.target.id);
   
    //     if (event.target.value==="" || (/^\d+\.?\d*$/).test(event.target.value)){
   
    //      input[event.target.id]=event.target.value;
   
    //      setUserInput(input);
    //    }
   
    //   }

    function DisplayCarpark(carpark){

        //let [showPrice, setShowPrice] = useState(false);

        return(
            <div key={carpark.Agency+carpark.CarParkID} className="card" id={carpark.Agency+carpark.CarParkID}>
                

                <div className="icons">
                    <div onClick={()=>{
                        let elemID= carpark.Agency+carpark.CarParkID;
                        let avail = document.querySelector(`#${elemID}>div>#available_lots`);
                        if (avail.style.display ==="none"){
                            avail.style.display = "block";
                        } else{
                            avail.style.display = "none"};
                        let cost = document.querySelector(`#${elemID}>div>#rates`);
                        if (cost.style.display ==="none"){
                            cost.style.display ="block";
                        } else {
                            cost.style.display ="none"
                        }

                    }}>$</div>
                </div>

                
                <div>                
                    <h2>
                        {carpark.Development} <ColorIcon carpark={carpark} />
                    </h2>
                    <h4>{carpark.Agency}</h4>
                    <h3 id="available_lots">
                        {carpark.AvailableLots} , {carpark.CarParkID}
                    </h3>

                    <div id="rates" style={{display:"none"}}>
                        <ShowRates carparkInfo={carpark}/>
                    </div>

                </div>

            </div>
                
            //     {/* <h2>
            //         {carpark.AvailableLots} , {carpark.LotType}, {carpark.CarParkID}
            //     </h2>
            //     <h3>
            //         {carpark.Development}
            //     </h3>
            //     <h4>{carpark.Agency}</h4>

            // </div> */}
        );
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
                <PostalcodeInput setUserLoc={setUserLoc}/>:""
            }

            <div className="display-container">
                {DisplayList()}
            </div>
        </>
    )

}

export default AppContent;