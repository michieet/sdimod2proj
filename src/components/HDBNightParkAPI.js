import axios from 'axios';

const HDBNightParkAPI = axios.create({
    baseURL:"http://localhost:3302",
});

export default HDBNightParkAPI;