const { Router } = require('express');
const router = Router();

const { getServicio, getServicioByCod,postServicio,deleteServicioByCod,updateServicioByCod, 
        getCliente,getClienteByCod,postCliente,deleteClienteByCod,updateClienteByCod,
        getVehiculo, getVehiculoByCod,postVehiculo,deleteVehiculoByCod,updateVehiculoByCod,
        getTipoVehiculo, getTipoVehiculoByCod,postTipoVehiculo,deleteTipoVehiculoByCod,updateTipoVehiculoByCod,
        getCiudad,getCiudadByCod,postCiudad,deleteCiudadByCod,updateCiudadByCod} = require('../controllers/index.controller');

router.get('/Servicio', getServicio);
router.get('/Servicio/:cod_servicio', getServicioByCod);
router.post('/Servicio', postServicio);
router.delete('/Servicio/:cod_servicio', deleteServicioByCod);
router.put('/Servicio/:cod_servicio', updateServicioByCod);

router.get('/Vehiculo', getVehiculo);
router.get('/Vehiculo/:cod_vehiculo', getVehiculoByCod);
router.post('/Vehiculo', postVehiculo);
router.delete('/Vehiculo/:cod_vehiculo', deleteVehiculoByCod);
router.put('/Vehiculo/:cod_vehiculo', updateVehiculoByCod);

router.get('/TipoVehiculo', getTipoVehiculo);
router.get('/TipoVehiculo/:cod_tipovehiculo', getTipoVehiculoByCod);
router.post('/TipoVehiculo', postTipoVehiculo);
router.delete('/TipoVehiculo/:cod_tipovehiculo', deleteTipoVehiculoByCod);
router.put('/TipoVehiculo/:cod_tipovehiculo', updateTipoVehiculoByCod);

router.get('/Cliente', getCliente);
router.get('/Cliente/:cedula_cliente', getClienteByCod);
router.post('/Cliente', postCliente);
router.delete('/Cliente/:cedula_cliente', deleteClienteByCod);
router.put('/Cliente/:cedula_cliente', updateClienteByCod);

router.get('/Ciudad', getCiudad);
router.get('/Ciudad/:nombre_ciudad', getCiudadByCod);
router.post('/Ciudad', postCiudad);
router.delete('/Ciudad/nombre_ciudad', deleteCiudadByCod);
router.put('/Ciudad/:nombre_ciudad', updateCiudadByCod);

module.exports = router;