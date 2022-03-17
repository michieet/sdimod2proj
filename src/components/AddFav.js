//import { IoIosHeartDislike, IoIosHeartEmpty } from "react-icons/io";
import {useState} from 'react';

function AddFav (props) {

    const {favoriteCarpark, setFavoriteCarpark, carpark} = props;
    const carparkInFav = favoriteCarpark.find((data) => data.car_park_no === carpark.car_park_no);
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
        localStorage.setItem("favoriteCarpark", JSON.stringify(favoriteCarpark));
        console.log("favouriteCarpark",favoriteCarpark);
        console.log("added to Favourite")
    };

    const deleteFavCarpark = () => {
        setIsFav(!isFav);
        let newList = favoriteCarpark.filter(item => {
            console.log(item.car_park_no);
            console.log(carpark.car_park_no);
            return item.car_park_no !== carpark.car_park_no})
        setFavoriteCarpark(newList);
        localStorage.setItem("favoriteCarpark", JSON.stringify(newList));
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
