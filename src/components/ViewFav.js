import React, { useEffect } from 'react'
import { uniqueId } from 'lodash';
import { IoMdHeartDislike } from "react-icons/io";

function ViewFav (props) {

const {favoriteCarpark, deleteFavCarpark } = useState([]); 


// useEffect (() => {

// });


  return(
    <div>
    <h2 className="favH2">Your Saved Favourites</h2>
        <table className="fav">
        <thead>
            <tr>
                <th>Name</th>
                <th>Color Icon </th>
                <th>Avail Lots</th>
                <th>Delete</th>
            </tr>
        </thead>
      <tbody>
          {favoriteCarpark.map( f =>
                <tr key={uniqueId('fav')}>
                    <td>{f.Development}</td>
                    <td>coloricon</td>
                    <td>{f.AvailableLots}</td>
                    <td> { deleteFavCarpark ? <IoMdHeartDislike onClick={() => deleteFavCarpark(f.id)} style={{color: "red"}}>
                    </IoMdHeartDislike>
                    : null}

                    </td>
                </tr>
                )
          
          }



          {/* {
            favoriteCarpark.length > 0 ? favoriteCarpark.map( f =>
                <tr key={uniqueId('fav')}>
                    <td>{f.Development}</td>
                    <td>coloricon</td>
                    <td>{f.AvailableLots}</td>
                    <td> { deleteFavCarpark ? <IoMdHeartDislike onClick={() => deleteFavCarpark(f.id)} style={{color: "red"}}>
                    </IoMdHeartDislike>
                    : null}

                    </td>
                </tr>
                )
                : <tr><td>Your favourite list is empty
                    </td></tr>
          } */}
      </tbody>
        </table>
    </div>
)
}

export default ViewFav;
