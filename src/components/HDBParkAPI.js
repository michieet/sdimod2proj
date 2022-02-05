import axios from 'axios';

const HDBParkAPI = axios.create({
    baseURL:'http://localhost:3302',
});

export default HDBParkAPI;