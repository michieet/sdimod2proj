import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import mockedData from "../LTACarparkData.json";
import getNearestCarparks from './nearestCarpark';
import carparkData from '../carparkData';
import PostalcodeInput from '../PostalcodeInput';
import ShowRates from '../components/ShowRates';
import ColorIcon from '../components/colorIcon';
import availableAPI from '../components/availableAPI';
import AddFav from '../components/AddFav';
import Spinner from "../assets/Spinner.svg";
import locationAPI from  '../components/locationAPI';

function AppContent(){

    const {id} = useParams();
    //const {nearestCarpark, favoriteCarpark, setUserLoc} = props;
    //let [userInput, setUserInput] = useState({latitude:"", longitude:""});

    let [userLoc, setUserLoc] = useState({latitude:"", longitude:"" });
    let [carparksLoc, setCarparksLoc] = useState([]);
    let [carparksAvail, setCarparksAvail]=useState([]);
    let [nearestCarpark, setNearestCarpark] = useState([]);
    let [favoriteCarpark, setFavoriteCarpark] = useState(() => {
        const saved = localStorage.getItem("favoriteCarpark");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
      });
  
  
    function retrieveCarparkAvailData(){
      console.log("Getting data...");
  
      let carparksAvailData;
  
    //   data = mockedData.value;

        availableAPI.get("/carpark-availability").then(
            res=>{
                if (res.status===200){
                    console.log(res.data);
                    console.log(`Data received. timestamp:${res.data.items[0].timestamp}`);
                    carparksAvailData = res.data.items[0].carpark_data;
                    console.log(carparksAvailData);
                    // data = data.filter(carpark=>carpark.LotType==="C");
                    setCarparksAvail(carparksAvailData);
                }
            }
        ).catch(err=>{
            console.log(err.message);
            // carparksData = mockedData.value;
            // carparksData = carparksData.filter(carpark=>carpark.LotType==="C");
            // setCarparksLocData(carparksData);
        })

    }


    function retrieveCarparkLocateData(){
        let offset=0;
        let location_data=[];
        let num_loc;
        
        console.log("test");

        locationAPI.get("/datastore_search", {params:{offset: offset, resource_id:"139a3035-e624-4f56-b63f-89ae28d4ae4c"}}, {timeout:2000}).then(
            res=>{
                if(res.status===200){
                    num_loc = res.data.result.total;
                    console.log(num_loc);

                    for (offset=0;offset<num_loc;offset+=100){
                        locationAPI.get("/datastore_search", {params:{offset: offset, resource_id:"139a3035-e624-4f56-b63f-89ae28d4ae4c"}}, {timeout:2000}).then(
                            res=>{
                                if(res.status===200){
                                    // console.log(`Offset ${res.data.result.offset} received.`);
                                    if(offset===0){
                                        num_loc = res.data.result.total;
                                    }
                                    
                                    location_data.push(...res.data.result.records);
                                    setCarparksLoc(location_data);
                                    console.log(location_data);
                                }
                
                            }).catch(err=>{
                                console.log(err);      
                            })}

                }

            }).catch(err=>{
                console.log(err);      
            });

        ;

        
        


    }
  
    // function setCarparksLocData(data){
  
    //   data.forEach(carpark=>{
    //   carpark["latitude"] = carpark.Location.split(' ')[0];
    //   carpark["longitude"] = carpark.Location.split(' ')[1];
    //   })
  
    //   setCarparksLoc(data);
    //  }


     useEffect(()=>{
         retrieveCarparkLocateData();
     },[])
  
  
     useEffect(()=>{

        if((id==="nearest")||(id==="favorites")){  
            // && userLoc.latitude && userLoc.longitude

            let update = setInterval(retrieveCarparkAvailData,5000);
        
        return(
            ()=>{clearInterval(update)}
        )
        }
  
     },[userLoc, carparksLoc])
  
  
     useEffect(()=>{
       getNearestCarparks(userLoc, carparksLoc, setNearestCarpark)
     }, [userLoc, carparksLoc])


     useEffect(()=>{
        updateFavoriteCarparks(carparksLoc,favoriteCarpark, setFavoriteCarpark);
      }, [carparksLoc])


    function updateFavoriteCarparks(carparksLoc,favoriteCarpark, setFavoriteCarpark){
        let favCarparkList = [...favoriteCarpark];

        if (favCarparkList.length >0 && carparksLoc.length > 0){
            for (let i = 0; i<favCarparkList.length; i++){
                let matchedCarpark = carparksLoc.find(carpark => carpark.CarParkID===favCarparkList[i].CarParkID);
                console.log("matchedCarpark", matchedCarpark);
                let currAvailLots = matchedCarpark.AvailableLots;
                favCarparkList[i].AvailableLots = currAvailLots;
            }

            setFavoriteCarpark(favCarparkList);
            console.log("Available lots in favourite list updated");
        }
    }
  
  


    // function handleInput(event){

    //     let input = {...userInput};
   
    //     console.log(event.target.id);
   
    //     if (event.target.value==="" || (/^\d+\.?\d*$/).test(event.target.value)){
   
    //      input[event.target.id]=event.target.value;
   
    //      setUserInput(input);
    //    }
   
    //   }

    function DisplayCarpark(carpark){

        const nearbyCarpark = carparksAvail.find((carparkAvail)=>{
            return (carparkAvail.carpark_number === carpark.car_park_no && carparkAvail.carpark_info[0].lot_type==="C")
        })

        return(
            <div key={carpark.car_park_no} className="card" id={carpark.car_park_no}>
                

                <div className="icons">
                    <div className="dollar" onClick={()=>{
                        let elemID= carpark.car_park_no;
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

                    }}>💲</div><div><AddFav setFavoriteCarpark={setFavoriteCarpark} carpark={carpark} favoriteCarpark={favoriteCarpark}/></div>
                </div>

                
                <div>                
                    <h2>
                        {carpark.address} <ColorIcon carpark={carpark} />
                    </h2>
                    {/* <h4>{carpark.Agency}</h4> */}
                    <h3 id="available_lots">
                        Total Lots: {nearbyCarpark? nearbyCarpark.carpark_info[0].total_lots:"-"} <br></br>
                        Available Lots: {nearbyCarpark? nearbyCarpark.carpark_info[0].lots_available:"-"} <br></br>
                        Updated at: {nearbyCarpark? nearbyCarpark.update_datetime:"-"}

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
            if (!userLoc.longitude || !userLoc.latitude){
                carparkList = <div className="centerOfGrid">Please enter your current location</div>
            }else if (nearestCarpark.length === 0){
                carparkList = <div className="centerOfGrid"><img src={Spinner} />.</div>
            }
            else if (nearestCarpark===false){
                carparkList = <div className="centerOfGrid">No carpark found within 1km</div>;
            } else if(nearestCarpark==="OOB"){
                carparkList = <div className="centerOfGrid">Response lat:{userLoc.latitude}, long: {userLoc.longitude} is out of bound. Please refine your search</div>;
            }
            else{
                nearestCarpark.sort((a,b)=>-(a.AvailableLots - b.AvailableLots));
                carparkList = nearestCarpark.map(DisplayCarpark);
            }
        } else if (id==="favorites"){
            console.log("favorites selected");
            console.log(favoriteCarpark);
            if (favoriteCarpark.length !== 0){
                carparkList = favoriteCarpark.map(DisplayCarpark);
            }else{
                carparkList = <div className="centerOfGrid">No favourite carpark saved</div>;                
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