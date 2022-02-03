import "./Favourites.css";
import API from '../API/API'
import { useState, useEffect } from "react";
import ViewFavouriteList from "./ViewFavouriteList";

function Favourites () {

    const [favouriteList, setFavouriteList] = useState([]);

    const apiGetFavourites = async () => {
        const {status, data} = await API.get('/favourites');
        if (status === 200) {
            setFavouriteList(data);
        }
}

useEffect( () => {
    console.log('useEffect')
    apiGetFavourites();
}, [])



const deleteItem = async (id) => {
    console.log("clicked delete")
    const newList = favouriteList.filter(item => item.id !== id );
    setFavouriteList(newList);
    try {
        const response = await API.delete(`/favourites/${id}`);
        console.log("API.delete response:", response)
    } catch (err) {
        console.log("API.delete error:", err.message);
    }
}


return (
    <>
        <ViewFavouriteList favouriteList={favouriteList} deleteItem={deleteItem} />
    </>
)
}
export default Favourites;