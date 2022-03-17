import axios from 'axios';

const URAParkRateAPI = axios.create({
    baseURL:"http://localhost:3303",
});

export default URAParkRateAPI;