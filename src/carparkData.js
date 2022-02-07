import axios from "axios";

const carparkData = axios.create({
    baseURL: "http://datamall2.mytransport.sg/ltaodataservice",
    headers: {
        'AccountKey': '7o5Xj3xUQJ++0layfMhTsQ==',
        "Access-Control-Allow-Origin": "*",
    }

})

export default carparkData;