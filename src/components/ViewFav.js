import React from 'react'
import { uniqueId } from 'lodash';
import { IoMdHeartDislike } from "react-icons/io";

const favoriteCarpark = [
    {"CarParkID":"1","Area":"Marina","Development":"Suntec City","Location":"1.29375 103.85718","AvailableLots":1240,"LotType":"C","Agency":"LTA","Favourite": true},{"CarParkID":"2","Area":"Marina","Development":"Marina Square","Location":"1.29115 103.85728","AvailableLots":1362,"LotType":"C","Agency":"LTA", "Favourite": false},
  ];

function ViewFav () {

//const {deleteItem = 0 } = props;

const deleteItem = () => {
    console.log("clicked delete, to change favourite value to false")
}


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
            favoriteCarpark.length > 0 ? favoriteCarpark.filter(f => 
                f.Favourite === true).map( f =>
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

export default ViewFav;
