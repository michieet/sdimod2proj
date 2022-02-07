import axios from 'axios';

const availableAPI = axios.create({
    baseURL:'http://localhost:3300',
});

export default availableAPI;