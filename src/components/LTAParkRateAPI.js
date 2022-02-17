import axios from 'axios';

const LTAParkRateAPI = axios.create({
    baseURL:"http://localhost:3301",
});

export default LTAParkRateAPI;