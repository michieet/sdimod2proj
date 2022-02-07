import { IoIosHeart, IoIosHeartDislike, IoIosHeartEmpty } from "react-icons/io";

function AddFav (props) {

const {favoriteCarpark, setFavoriteCarpark, carpark} = props;

const addFavCarpark = () => {
    favoriteCarpark.push({props})
    setFavoriteCarpark(favoriteCarpark);
    console.log("favouriteCarpark",favoriteCarpark);
    alert("added to Favourite")
  };

  const deleteFavCarpark = () => {
    favoriteCarpark.pop({props})
    setFavoriteCarpark(favoriteCarpark);
    
    console.log("favouriteCarpark",favoriteCarpark);
    alert("deleted from Favourite")

}

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
// carpark is an object
