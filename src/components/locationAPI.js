import axios from 'axios';

const locationAPI = axios.create({
    baseURL:'https://data.gov.sg/api/action',
});

export default locationAPI;