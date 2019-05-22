const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        clima.getClima(resp.lat, resp.lng)
            .then(data => {
                console.log(`El clima de ${argv.direccion} es de ${data} grados centígrados`);
            })
            .catch(err => {
                console.log(`No se pudo determinar el clima de ${argv.direccion}`);
            });
    })
    .catch(err => {
        console.log(err);
    }); */

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp} grados centígrados.`

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}.`
    }
};

getInfo(argv.direccion)
    .then(data => { console.log(data); })
    .catch(err => { console.log(err); });