import axios from 'axios'

const API = axios.create({
  baseURL:'http://localhost:3301'
});

export default API;