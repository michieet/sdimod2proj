import axios from 'axios';

const URAParkRateAPI = axios.create({
    baseURL:"http://localhost:3300",
});

export default URAParkRateAPI;



// const ParkingRateAPI = axios.create({
//     baseURL:"https://www.ura.gov.sg/uraDataService/invokeUraDS?service=Car_Park_Details",
//     headers: {
//         'AccessKey': '9daee3df-214f-402e-9042-f6c5f583f967',
//         'Token': '6d-eZd2X7-H4def4feK2Cec942xdGw9d83Pvn04G-@hXTQfZuvMfWd5A@x66fuX@t3W7t4enV2caQa2d6Qf2GVhh8WWvK@fwYc9-'
//     }
// });

// export default ParkingRateAPI;