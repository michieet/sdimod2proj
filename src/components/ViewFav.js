import React from 'react'
import { uniqueId } from 'lodash';
import { IoMdHeartDislike } from "react-icons/io";
import colorIcon from './colorIcon';

function ViewFav (props) {

    const {favoriteCarpark, deleteFavCarpark} = props; 

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
          {favoriteCarpark.length > 0 ? favoriteCarpark.map(f =>
                <tr key={uniqueId('fav')}>
                    <td>{f.Development}</td>
                    <td><colorIcon /></td>
                    <td>{f.AvailableLots}</td>
                    <td> { deleteFavCarpark ? <IoMdHeartDislike onClick={() => deleteFavCarpark(f.id)} style={{color: "red"}}>
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
