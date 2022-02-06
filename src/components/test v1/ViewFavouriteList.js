import React from 'react'
import { uniqueId } from 'lodash';
import { IoMdHeartDislike } from "react-icons/io";


//later stage may need uniqueID from lodash to create unique id for each newly added carpark location

function ViewFavouriteList (props) {
    const {favouriteList, deleteItem = 0} = props;


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
              {
                favouriteList.length > 0 ? favouriteList.map( f =>
                    <tr key={uniqueId('fav')}>
                        <td>{f.Development}</td>
                        <td>coloricon</td>
                        <td>{f.AvailableLots}</td>
                        <td> { deleteItem ? <IoMdHeartDislike onClick={() => deleteItem(f.id)} style={{color: "red"}}>
                        </IoMdHeartDislike>
                        : null}

                        </td>
                    </tr>
                    )
                    : <tr><td>Your favourite list is empty
                        </td></tr>
              }
          </tbody>
            </table>
        </div>
    )
}

export default ViewFavouriteList;