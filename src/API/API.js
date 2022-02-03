// import axios from 'axios';

// export const API = axios.create({
//     baseURL:'https://api.data.gov.sg/v1/transport/carpark-availability',
//     headers: {
//       'AccountKey': '139a3035-e624-4f56-b63f-89ae28d4ae4c'
//     }    
//   });

export const API = {
    "odata.metadata": "http://datamall2.mytransport.sg/ltaodataservice/$metadata#CarParkAvailability",
    "value": [
        {
            "CarParkID": "1",
            "Area": "Marina",
            "Development": "Suntec City",
            "Location": "1.29375 103.85718",
            "AvailableLots": 1104,
            "LotType": "C",
            "Agency": "LTA"
        },
        {
            "CarParkID": "2",
            "Area": "Marina",
            "Development": "Marina Square",
            "Location": "1.29115 103.85728",
            "AvailableLots": 1091,
            "LotType": "C",
            "Agency": "LTA"
        },
        {
            "CarParkID": "3",
            "Area": "Marina",
            "Development": "Raffles City",
            "Location": "1.29382 103.85319",
            "AvailableLots": 453,
            "LotType": "C",
            "Agency": "LTA"
        },
        {
            "CarParkID": "4",
            "Area": "Marina",
            "Development": "The Esplanade",
            "Location": "1.29011 103.85561",
            "AvailableLots": 448,
            "LotType": "C",
            "Agency": "LTA"
        },
        {
            "CarParkID": "5",
            "Area": "Marina",
            "Development": "Millenia Singapore",
            "Location": "1.29251 103.86009",
            "AvailableLots": 532,
            "LotType": "C",
            "Agency": "LTA"
        }
    ]
};