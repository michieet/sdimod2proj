import axios from 'axios';

const availableAPI = axios.create({
    baseURL:'https://api.data.gov.sg/v1/transport',
});

export default availableAPI;