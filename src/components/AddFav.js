import { IoIosHeartDislike, IoIosHeartEmpty } from "react-icons/io";

function AddFav (props) {

    const {favoriteCarpark, setFavoriteCarpark, carpark} = props;

    const addFavCarpark = () => {
        favoriteCarpark.push(carpark)
        setFavoriteCarpark(favoriteCarpark);
        console.log("favouriteCarpark",favoriteCarpark);
        console.log("added to Favourite")
    };

    const deleteFavCarpark = () => {
        favoriteCarpark.pop(carpark)
        setFavoriteCarpark(favoriteCarpark);
        console.log("favouriteCarpark",favoriteCarpark);
        console.log("deleted from Favourite")
    };

    return (
        <>
            <IoIosHeartEmpty onClick={addFavCarpark} style={{color: "red"}} /> 
            <IoIosHeartDislike onClick={deleteFavCarpark} style={{color: "red"}} /> 
        </>
    )
}

export default AddFav;
//favouriteCarpark should be an array of objects []
//setFavouriteCarpark is to update favouriteCarpark array in the main array
//carpark is an object
