import axios from 'axios';

export const API = axios.create({
    baseURL:'http://datamall2.mytransport.sg/ltaodataservice/$metadata#CarParkAvailability',
    headers: {
      'AccountKey': process.env.REACT_APP_API_KEY
    }    
  });