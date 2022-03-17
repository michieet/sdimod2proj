import axios from "axios";
import {useState} from "react";

const apiKey=process.env.REACT_APP_GOOGLE_API_KEY;


function PostalcodeInput(props) {

  const{setUserLoc} = props;  
  const [postalCode, setPostalCode] = useState("");
//  const [userloc, setUserLoc] = useState()
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
        key: apiKey
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
        setUserLoc(userLoc);
      
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
      <div className="form-section">
        <form>
          <input className="inputField"
            type="text"
            placeholder="Enter Your Location"
            name="postal-code"
            onChange={handlePostalCode}
            value={postalCode}
          ></input>
          
          <button className="myButton" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PostalcodeInput;
