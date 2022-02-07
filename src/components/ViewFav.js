import React from 'react'
import { uniqueId } from 'lodash';
import { IoMdHeartDislike } from "react-icons/io";
import colorIcon from './colorIcon';

function ViewFav (props) {

    const {favoriteCarpark, deleteFavCarpark, carpark} = props; 

  return(
    <div>
    <h2 className="favH2">Your Saved Favourites</h2>
        <table className="fav">
        <thead>
            <tr>
                <th>Name</th>
                <th>Color Icon</th>
                <th>Avail Lots</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {favoriteCarpark.length > 0 ? favoriteCarpark.map(carpark =>
                <tr key={uniqueId('fav')}>
                    <td>{carpark.Development}</td>
                    <td><colorIcon /></td>
                    <td>{carpark.AvailableLots}</td>
                    <td> { deleteFavCarpark ? <IoMdHeartDislike onClick={() => deleteFavCarpark(carpark.CarParkID)} style={{color: "red"}}>
                    </IoMdHeartDislike>
                    : null}

                    </td>
                </tr>
                )
                :   <tr><td>
                    Your favourite list is empty
                    </td></tr>
            }
        </tbody>
        </table>
    </div>
    )
}

export default ViewFav;
