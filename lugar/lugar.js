const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '847a856842msh454c992d4322232p1681cbjsn0d50c992a952' }
    });

    const resp = await instance.get();
    if (resp.status === 200) {
        const data = resp.data.Results[0];
        if (data === 0) {
            throw new Error(`No hay resultados para ${direccion}`)
        }
        const dir = data.name;
        const lat = data.lat;
        const lng = data.lon;

        return {
            dir,
            lat,
            lng
        }
    } else {
        throw new Error(`Error!!!!`)
    }
}

module.exports = {
    getLugarLatLng
}