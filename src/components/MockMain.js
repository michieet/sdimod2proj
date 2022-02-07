import { uniqueId } from 'lodash';
import { IoIosHeart, IoIosHeartDislike, IoIosHeartEmpty } from "react-icons/io";
import API from '../API/API'
import { useState, useEffect } from "react";
import "./Favourites.css";
import ViewFav from './ViewFav';
import AddFav from './AddFav';

function MockMain () {

    let [carparksData, setCarparksData] = useState([]);
    let [favoriteCarpark, setFavoriteCarpark] = useState([]);

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
    }, [favoriteCarpark])


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
                carparksData.map( r =>
                    <tr key={uniqueId('main')}>
                        <td>{r.Development} - CarPark ID {r.CarParkID} </td>
                        <td>coloricon </td>
                        <td>{r.AvailableLots}</td>
                        <td>
                            {/* <IoIosHeartEmpty onClick={addFavCarpark} style={{color: "red"}} /> 
                                {/* <p>Add to Favourite</p><button onClick={handleClick} style={{color: 'red'}}>❤</button> */}
                              {/*  <IoIosHeartDislike onClick={deleteFavCarpark} style={{color: "red"}} />  */}
                        </td>
                    </tr>
                    )
              }
          </tbody>
            </table>
        
        <hr></hr>

        <AddFav addFavCarpark={addFavCarpark} deleteFavCarpark={deleteFavCarpark} />
        <ViewFav favoriteCarpark={favoriteCarpark} deleteFavCarpark={deleteFavCarpark} /> 
        </>
    )
}

export default MockMain;