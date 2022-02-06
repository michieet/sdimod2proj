import { uniqueId } from 'lodash';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import API from '../API/API'
import { useState, useEffect } from "react";
import "./Favourites.css";
import ViewFav from './ViewFav';

function MockMain () {

    let [carparksData, setCarparksData] = useState([]);
    let [favoriteCarpark, setNFavoriteCarpark] = useState([]);

    const apiGetcarparksData = async () => {
        const {status, data} = await API.get('/value');
        if (status === 200) {
            setCarparksData(data);
            //console.log("API Data",data)
        }
}

useEffect( () => {
    console.log('useEffect')
    apiGetcarparksData();
}, [])


//Assign Default Favourite Value: False
const defaultFavValue = carparksData.map(object => {
    return {...object, Favourite: false};
});

console.log("Assigning Default Favourite: False ",defaultFavValue);


const addFavCarpark = (e)=> {
    console.log("Testing: ",defaultFavValue[0].Favourite);
    console.log(e.target)
  };

  const deleteItem = () => {
    console.log("clicked delete")
}



// useEffect(() => {
//     const carparkFavourites = JSON.parse(
//         localStorage.getItem('carpark-app-favourites')
//     );

//     if (carparkFavourites) {
//         setNFavoriteCarpark(carparkFavourites);
//     }
// }, []);


// const saveToLocalStorage = (items) => {
//     localStorage.setItem('carpark-app-favourites', JSON.stringify(items));
// };

// const addFavCarpark = (carpark) => {
//     const newFavouriteList = [...favoriteCarpark, carpark];
//     setNFavoriteCarpark(newFavouriteList);
//     //saveToLocalStorage(newFavouriteList);
//     alert("Added to Favourite");
// };


// const removeFavCarpark = (carpark) => {
//     const newFavouriteList = favoriteCarpark.filter(
//         (favourite) => favourite.ID !== carpark.ID
//     );

//     setNFavoriteCarpark(newFavouriteList);
//     saveToLocalStorage(newFavouriteList);
// };


    return (
        <>
        <h2 className="favH2">Mock Main </h2>

            <table className="fav">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color Icon</th>
                    <th>Avail Lots</th>
                    <th>Favourite</th>
                </tr>
            </thead>
          <tbody>
              {
                defaultFavValue.map( r =>
                    <tr key={uniqueId('main')}>
                        <td onClick={addFavCarpark}>{r.Development} - CarPark ID {r.CarParkID} </td>
                        <td>coloricon </td>
                        <td>{r.AvailableLots}</td>
                        <td><IoIosHeartEmpty onClick={addFavCarpark} style={{color: "red"}} /> 
                                {/* <p>Add to Favourite</p><button onClick={handleClick} style={{color: 'red'}}>❤</button> */}
                        
                        </td>
                    </tr>
                    )
              }
          </tbody>
            </table>
        
        <hr></hr>
        </>
    )
}

export default MockMain;