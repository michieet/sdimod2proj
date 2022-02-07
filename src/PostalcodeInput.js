import axios from "axios";
import {useState} from "react";

function PostalcodeInput({props}) {

  // const{setUserLoc} = props;  
  const [postalCode, setPostalCode] = useState("");
  const [userloc, setUserLoc] = useState()
  let userLoc; 

  const handlePostalCode = (e)=>{
    // console.log(e.target.name,e.target.value);
    setPostalCode(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    geocode(postalCode)
    setPostalCode("")
  }
 
  function geocode(){
    
    const location = postalCode;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params:{
        address:location,
        key:'AIzaSyDJhmmjCCsw1qzIT6hQ7M6YSnOx3ZvRpU8'
      }
    })
    .then(function(response){
      //log full response
      console.log(response);
      // //log long and lat
      // console.log(response.data.results[0].geometry.location.lng);
      // setUserLoc(response.data.results[0].geometry.location)
      
      //  const latitude = response.data.results[0].geometry.location.lat;
      //  const longitude = response.data.results[0].geometry.location.lng;

      //  console.log(longitude);
      //  console.log(latitude);

        userLoc = {
         latitude : response.data.results[0].geometry.location.lat,
         longitude : response.data.results[0].geometry.location.lng


        }
        // console.log(userLoc);
      
      }
     

    )
    .catch(function(error){
      console.log(error);
    })
  }
  console.log(userLoc);
  // console.log(setUserLoc);

  // console.log('Postal Code:', postalCode);
  return (
    <div className="postalcode-input">
      <h1>postal code input</h1>
      <div className="form-section">
        <form>
          <input
            type="text"
            placeholder="Park Where?"
            name="postal-code"
            onChange={handlePostalCode}
            value={postalCode}
          ></input>
          
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PostalcodeInput;
