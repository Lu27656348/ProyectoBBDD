const { Router } = require('express');
const router = Router();

const { getServicio, getServicioByCod,postServicio,deleteServicioByCod,updateServicioByCod } = require('../controllers/index.controller');

router.get('/Servicio', getServicio);
router.get('/Servicio/:cod_servicio', getServicioByCod);
router.post('/Servicio', postServicio);
router.delete('/Servicio/:cod_servicio', deleteServicioByCod);
router.put('/Servicio/:cod_servicio', updateServicioByCod);

module.exports = router;