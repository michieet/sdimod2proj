import { uniqueId } from 'lodash';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

function MockMain () {

    const record = [ 
        {
          "id": 1,
          "CarParkID": "1",
          "Area": "Marina",
          "Development": "Suntec City",
          "Location": "1.29375 103.85718",
          "AvailableLots": 1104,
          "LotType": "C",
          "Agency": "LTA"
        },
        {
          "id": 2,
          "CarParkID": "2",
          "Area": "Marina",
          "Development": "Marina Square",
          "Location": "1.29115 103.85728",
          "AvailableLots": 1091,
          "LotType": "C",
          "Agency": "LTA"
        },
        {
          "id": 3,
          "CarParkID": "3",
          "Area": "Marina",
          "Development": "Raffles City",
          "Location": "1.29382 103.85319",
          "AvailableLots": 453,
          "LotType": "C",
          "Agency": "LTA"
        },
        {
          "id": 4,
          "CarParkID": "4",
          "Area": "Marina",
          "Development": "The Esplanade",
          "Location": "1.29011 103.85561",
          "AvailableLots": 448,
          "LotType": "C",
          "Agency": "LTA"
        },
        {
          "id": 5,
          "CarParkID": "5",
          "Area": "Marina",
          "Development": "Millenia Singapore",
          "Location": "1.29251 103.86009",
          "AvailableLots": 532,
          "LotType": "C",
          "Agency": "LTA"
        }
      ]

    console.log(record);

    function addFav ()  {
        alert("Added to Favourite");
        // record.push({
        //     "id": 6,
        //     "CarParkID": "6",
        //     "Area": "Lala",
        //     "Development": "Lalaland",
        //     "Location": "1.9999 103.9999",
        //     "AvailableLots": 999,
        //     "LotType": "C",
        //     "Agency": "LTA"
        //   })
    }


    


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
                record.map( r =>
                    <tr key={uniqueId('main')}>
                        <td>{r.Development}</td>
                        <td>coloricon</td>
                        <td>{r.AvailableLots}</td>
                        <td><IoIosHeartEmpty onClick={addFav} style={{color: "red"}} /></td>
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