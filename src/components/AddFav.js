//import { IoIosHeartDislike, IoIosHeartEmpty } from "react-icons/io";
import {useState} from 'react';

function AddFav (props) {

    const {favoriteCarpark, setFavoriteCarpark, carpark} = props;
    const carparkInFav = favoriteCarpark.find((data) => data.CarParkID === carpark.CarParkID);
    let iniFav;
    if (carparkInFav){
        iniFav = true;
    } else {
        iniFav = false;
    }

    const [isFav, setIsFav] = useState(iniFav);
    // isFav returns an object when "true", and if carpark is not in favoriteCarpark array, it returns undefined.

    const addFavCarpark = () => {
        setIsFav(!isFav);
        favoriteCarpark.push(carpark)
        setFavoriteCarpark(favoriteCarpark);
        console.log("favouriteCarpark",favoriteCarpark);
        console.log("added to Favourite")
    };

    const deleteFavCarpark = () => {
        setIsFav(!isFav);
        setFavoriteCarpark(favoriteCarpark.filter(item => {
            console.log(item.CarParkID);
            console.log(carpark.CarParkID);
            return item.CarParkID !== carpark.CarParkID}));
        console.log("favouriteCarpark",favoriteCarpark);
        console.log("deleted from Favourite");
    };


    // here we do the conditional rendering
    return (
        <>
            {isFav ? <div className="heart" onClick={deleteFavCarpark} style={{color: "red"}}> ♥ </div> :
            <div className="heart" onClick={addFavCarpark} style={{color: "red"}}> ♡ </div>}
        </>
    )
}

export default AddFav;
//favouriteCarpark should be an array of objects []
//setFavouriteCarpark is to update favouriteCarpark array in the main array
//carpark is an object
