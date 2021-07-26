/****************************************************************/
                    /* *DEPENDENCIAS */
/****************************************************************/
const { Router } = require('express');
const { postServicio } = require('../controllers/servicio.controller')
const router = Router();
/****************************************************************/
                 /* *DECLARACION DE RUTAS* */
/****************************************************************/
const postRoute = router.post(postServicio);
/*
router.get('/Servicio', getServicio);
router.get('/Servicio/:cod_servicio', getServicioByCod);
router.delete('/Servicio/:cod_servicio', deleteServicioByCod);
router.put('/Servicio/:cod_servicio', updateServicioByCod);
*/
module.exports = {
    postRoute
};