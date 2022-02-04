// import axios from 'axios';

// export const API = axios.create({
//     baseURL:'http://datamall2.mytransport.sg',
//     headers: {
//       'AccountKey': 'Id2T89xUQH+qBlNyK2x7tQ==',
//       'accept': 'application/json'
//     }    
//   });

import axios from 'axios';

const API = axios.create({
  baseURL:'http://localhost:3000'
});

export default API;