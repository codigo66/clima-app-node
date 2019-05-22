const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=af6a70ebf9c2bee1c7cfaa65032faada&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}