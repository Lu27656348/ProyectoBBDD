const { Pool }= require('pg');

/*
const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'Lu27656348',
    database: 'PBBDD'
}

const pool = new Pool(config);
*/











































/*
const getCliente = async (req,res) => {
    const response = await pool.query('SELECT * FROM CLIENTE');
    res.json(response.rows);
};

const getClienteByCod = async (req,res) => {
    const codlineaaux = req.params.cedula_cliente;
    const response = await pool.query('SELECT * FROM CLIENTE WHERE cedula_cliente = $1', [codlineaaux]);
    res.json(response.rows);
};

const postCliente = async (req,res) => {
    const { cedula_cliente, nombre, email, frecuente, cantidadservicios } = req.body;
    const response = await pool.query('INSERT INTO CLIENTE (cedula_cliente, nombre, email, frecuente, cantidadservicios) VALUES ($1,$2,$3,$4,$5)',[cedula_cliente, nombre, email, frecuente, cantidadservicios]);
};

const deleteClienteByCod = async (req,res) => {
    const codlineaaux = req.params.cedula_cliente;
    const response = await pool.query('DELETE FROM CLIENTE WHERE cedula_cliente = $1', [codlineaaux]);
    res.json('CLIENTE COD ${codlineaaux} DELETED');
};

const updateClienteByCod = async (req,res) => {
    const codlineaaux = req.params.cedula_cliente;
    const { cedula_cliente, nombre,email,frecuente,cantidadservicios} = req.body;
    const response = await pool.query('UPDATE CLIENTE SET cedula_cliente = $1, nombre = $2, email = $3, frecuente = $4, cantidadservicios = $5 WHERE cedula_cliente = $6', [cedula_cliente, nombre,email,frecuente,cantidadservicios,codlineaaux]);
    res.json('CLIENTE COD ${codlineaaux} UPDATED');
};

const getVehiculo = async (req,res) => {
    const response = await pool.query('SELECT * FROM VEHICULO');
    res.json(response.rows);
};

const getVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.cod_vehiculo;
    const response = await pool.query('SELECT * FROM VEHICULO WHERE cod_vehiculo = $1', [codlineaaux]);
    res.json(response.rows);
};

const postVehiculo = async (req,res) => {
    const { cod_vehiculo, modelo, capacidad_tanque, placa, tiempouso, kilometraje, fecha_adquisicion,cod_tipovehiculo,cedula_cliente } = req.body;
    const response = await pool.query('INSERT INTO VEHICULO (cod_vehiculo, modelo, capacidad_tanque, placa, tiempouso, kilometraje, fecha_adquisicion,cod_tipovehiculo,cedula_cliente) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',[cod_vehiculo, modelo, capacidad_tanque, placa, tiempouso, kilometraje, fecha_adquisicion,cod_tipovehiculo,cedula_cliente]);
};

const deleteVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.cod_vehiculo;
    const response = await pool.query('DELETE FROM VEHICULO WHERE cod_vehiculo = $1', [codlineaaux]);
    res.json('VEHICULO COD ${codlineaaux} DELETED');
};

const updateVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.cod_vehiculo;
    const { cod_vehiculo, modelo, capacidad_tanque, placa, tiempouso, kilometraje, fecha_adquisicion,cod_tipovehiculo,cedula_cliente} = req.body;
    const response = await pool.query('UPDATE VEHICULO SET cod_vehiculo = $1, modelo = $2, capacidad_tanque = $3, placa = $4, tiempouso = $5, kilometraje = $6, fecha_adquisicion = $7, cod_tipovehiculo = $8, cedula_cliente = $9 WHERE cod_vehiculo = $10', [ cod_vehiculo, modelo, capacidad_tanque, placa, tiempouso, kilometraje, fecha_adquisicion,cod_tipovehiculo,cedula_cliente,codlineaaux]);
    res.json('VEHICULO COD ${codlineaaux} UPDATED');
};

const getTipoVehiculo = async (req,res) => {
    const response = await pool.query('SELECT * FROM TIPOVEHICULO');
    res.json(response.rows);
};

const getTipoVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.cod_tipovehiculo;
    const response = await pool.query('SELECT * FROM TIPOVEHICULO WHERE cod_tipovehiculo = $1', [codlineaaux]);
    res.json(response.rows);
};

const postTipoVehiculo = async (req,res) => {
    const { cod_tipovehiculo, descripcion } = req.body;
    const response = await pool.query('INSERT INTO TIPOVEHICULO (cod_tipovehiculo, descripcion) VALUES ($1,$2)',[cod_tipovehiculo, descripcion]);
};

const deleteTipoVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.cod_tipovehiculo;
    const response = await pool.query('DELETE FROM TIPOVEHICULO WHERE cod_tipovehiculo = $1', [codlineaaux]);
    res.json('TIPOVEHICULO COD ${codlineaaux} DELETED');
};

const updateTipoVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.cod_tipovehiculo;
    const { cod_tipovehiculo, descripcion} = req.body;
    const response = await pool.query('UPDATE TIPOVEHICULO SET cod_tipovehiculo = $1, descripcion = $2 WHERE cod_tipovehiculo = $3', [ cod_tipovehiculo,descripcion,codlineaaux]);
    res.json('VEHICULO COD ${codlineaaux} UPDATED');
};

const getCiudad = async (req,res) => {
    const response = await pool.query('SELECT * FROM CIUDAD');
    res.json(response.rows);
};

const getCiudadByCod = async (req,res) => {
    const codlineaaux = req.params.nombre_ciudad;
    const response = await pool.query('SELECT * FROM CIUDAD WHERE nombre_ciudad = $1', [codlineaaux]);
    res.json(response.rows);
};

const postCiudad = async (req,res) => {
    const { nombre_ciudad } = req.body;
    const response = await pool.query('INSERT INTO CIUDAD (nombre_ciudad) VALUES ($1)',[nombre_ciudad]);
};

const deleteCiudadByCod = async (req,res) => {
    const codlineaaux = req.params.nombre_ciudad;
    const response = await pool.query('DELETE FROM CIUDAD WHERE nombre_ciudad = $1', [codlineaaux]);
    res.json('CIUDAD COD ${codlineaaux} DELETED');
};

const updateCiudadByCod = async (req,res) => {
    const codlineaaux = req.params.nombre_ciudad;
    const { nombre_ciudad } = req.body;
    const response = await pool.query('UPDATE CIUDAD SET nombre_ciudad = $1 WHERE nombre_ciudad = $2', [ nombre_ciudad, codlineaaux]);
    res.json('CIUDAD COD ${codlineaaux} UPDATED');
};


const getLocal = async (req,res) => {
    const response = await pool.query('SELECT * FROM LOCALES');
    res.json(response.rows);
};

const getLocalByCod = async (req,res) => {
    const codlineaaux = req.params.riflocal;
    const response = await pool.query('SELECT * FROM LOCALES WHERE riflocal = $1', [codlineaaux]);
    res.json(response.rows);
};

const postLocal = async (req,res) => {
    const { riflocal,nombre,direccion,fechainventario,fecha_encargado,encargado,nombre_ciudad } = req.body;
    const response = await pool.query('INSERT INTO LOCALES (riflocal,nombre,direccion,fechainventario,fecha_encargado,encargado,nombre_ciudad) VALUES ($1,$2,$3,$4,$5,$6,$7)',[riflocal,nombre,direccion,fechainventario,fecha_encargado,encargado,nombre_ciudad]);
    res.json(response.rows);
};

const deleteLocalByCod = async (req,res) => {
    const codlineaaux = req.params.riflocal;
    const response = await pool.query('DELETE FROM LOCALES WHERE riflocal = $1', [codlineaaux]);
    res.json('LOCAL COD ${codlineaaux} DELETED');
};

const updateLocalByCod = async (req,res) => {
    const codlineaaux = req.params.riflocal;
    const { riflocal,nombre,direccion,fechainventario,fecha_encargado,encargado,nombre_ciudad } = req.body;
    const response = await pool.query('UPDATE CIUDAD SET riflocal = $1, nombre = $2, direccion = $3, fechainventario = $4, fecha_encargado = $5, encargado = $6, nombre_ciudad = $7, WHERE riflocal = $8', [ riflocal,nombre,direccion,fechainventario,fecha_encargado,encargado,nombre_ciudad, codlineaaux]);
    res.json('LOCAL COD ${codlineaaux} UPDATED');
};

const getMarcaVehiculo = async (req,res) => {
    const response = await pool.query('SELECT * FROM MARCAVEHICULO');
    res.json(response.rows);
};
const getMarcaVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.nombremarca;
    const response = await pool.query('SELECT * FROM MARCAVEHICULO WHERE nombremarca = $1', [codlineaaux]);
    res.json(response.rows);
};
const postMarcaVehiculo = async (req,res) => {
    const { nombremarca,aceitecaja,descripcion,cantidadp,refrigerante,octanaje } = req.body;
    const response = await pool.query('INSERT INTO MARCAVEHICULO (nombremarca,aceitecaja,descripcion,cantidadp,refrigerante,octanaje) VALUES ($1,$2,$3,$4,$5,$6)',[nombremarca,aceitecaja,descripcion,cantidadp,refrigerante,octanaje]);
    res.json(response.rows);
};
const deleteMarcaVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.nombremarca;
    const response = await pool.query('DELETE FROM MARCAVEHICULO WHERE nombremarca = $1', [codlineaaux]);
    res.json('MARCAVEHICULO COD ${codlineaaux} DELETED');
};
const updateMarcaVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.nombremarca;
    console.log('El nombre de la marca es: ' + codlineaaux);
    const { nombremarca,aceitecaja,descripcion,cantidadp,refrigerante,octanaje } = req.body;
    const response = await pool.query('UPDATE MARCAVEHICULO SET nombremarca = $1, aceitecaja = $2, descripcion = $3, cantidadp = $4, refrigerante = $5, octanaje = $6 WHERE nombremarca = $7', [ nombremarca,aceitecaja,descripcion,cantidadp,refrigerante,octanaje,codlineaaux]);
    res.json('MARCAVEHICULO COD ${codlineaaux} UPDATED');
};

const getActividad = async (req,res) => {
    const response = await pool.query('SELECT * FROM ACTIVIDAD');
    res.json(response.rows);
};

const getActividadByCod = async (req,res) => {
    const codlineaaux = req.params.nro_consecutivo;
    const codlineaauxx = req.params.cod_servicio;
    const response = await pool.query('SELECT * FROM ACTIVIDAD WHERE nro_consecutivo = $1 AND cod_servicio = $2', [codlineaaux,codlineaauxx]);
    res.json(response.rows);
};

const postActividad = async (req,res) => {
    const { nro_consecutivo,cod_servicio,nombre,descripcion,capacidad,costo } = req.body;
    const response = await pool.query('INSERT INTO ACTIVIDAD (nro_consecutivo,cod_servicio,nombre,descripcion,capacidad,costo) VALUES ($1,$2,$3,$4,$5,$6)',[nro_consecutivo,cod_servicio,nombre,descripcion,capacidad,costo]);
    res.json(response.rows);
};

const deleteActividadByCod = async (req,res) => {
    const codlineaaux = req.params.nro_consecutivo;
    const codlineaauxx = req.params.cod_servicio;
    const response = await pool.query('DELETE FROM ACTIVIDAD WHERE nro_consecutivo = $1 AND cod_servicio = $2', [codlineaaux,codlineaauxx]);
    res.json('ACTIVIDAD COD ${codlineaaux} DELETED');
};

const updateActividadByCod = async (req,res) => {
    const codlineaaux = req.params.nro_consecutivo;
    console.log('Estoy en update');
    console.log(codlineaaux);
    const codlineaauxx = req.params.cod_servicio;
    console.log(codlineaauxx);
    const { nro_consecutivo,cod_servicio,nombre,descripcion,capacidad,costo } = req.body;
    const response = await pool.query('UPDATE ACTIVIDAD SET nro_consecutivo = $1, cod_servicio = $2, nombre = $3, descripcion = $4, capacidad = $5, costo = $6 WHERE nro_consecutivo = $7 AND cod_servicio = $8 ', [ nro_consecutivo,cod_servicio,nombre,descripcion,capacidad,costo,codlineaaux,codlineaauxx ]);
    res.json('ACTIVIDAD COD ${codlineaaux} OF SERVICE ${codlineaauxx} UPDATED');
};

const getPersonal = async (req,res) => {
    const response = await pool.query('SELECT * FROM PERSONAL');
    res.json(response.rows);
};

const getPersonalByCod = async (req,res) => {
    const codlineaaux = req.params.cedulaper;
    const response = await pool.query('SELECT * FROM PERSONAL WHERE cedulaper = $1', [codlineaaux]);
    res.json(response.rows);
};

const postPersonal = async (req,res) => {
    const { cedulaper, nombreper, sueldo, telefonoper } = req.body;
    const response = await pool.query('INSERT INTO PERSONAL (cedulaper, nombreper, sueldo, telefonoper) VALUES ($1,$2,$3,$4)',[cedulaper, nombreper, sueldo, telefonoper]);
    res.json(response.rows);
};

const deletePersonalByCod = async (req,res) => {
    const codlineaaux = req.params.cedulaper;
    const response = await pool.query('DELETE FROM PERSONAL WHERE cedulaper = $1', [codlineaaux]);
    res.json('PERSONAL COD ${codlineaaux} DELETED');
};

const updatePersonalByCod = async (req,res) => {
    const codlineaaux = req.params.cedulaper;
    const { cedulaper, nombreper, sueldo, telefonoper } = req.body;
    const response = await pool.query('UPDATE PERSONAL SET cedulaper = $1, nombreper = $2, sueldo = $3, telefonoper = $4 WHERE cedulaper = $5', [ cedulaper, nombreper, sueldo, telefonoper,codlineaaux ]);
    res.json('PERSONAL COD ${codlineaaux} OF SERVICE ${codlineaauxx} UPDATED');
};

const getAsignado = async (req,res) => {
    const response = await pool.query('SELECT * FROM ASIGNADO');
    res.json(response.rows);
};

const getAsignadoByCod = async (req,res) => {
    const codlineaaux = req.params.cedula_personal;
    const codlineaauxx = req.params.cod_servicio;
    const response = await pool.query('SELECT * FROM ASIGNADO WHERE cedula_personal = $1 AND cod_servicio = $2', [codlineaaux, codlineaauxx]);
    res.json(response.rows);
};

const postAsignado = async (req,res) => {
    const { cedula_personal, cod_servicio } = req.body;
    const response = await pool.query('INSERT INTO ASIGNADO (cedula_personal, cod_servicio) VALUES ($1,$2)',[cedula_personal, cod_servicio]);
    res.json(response.rows);
};

const deleteAsignadoByCod = async (req,res) => {
    const codlineaaux = req.params.cedula_personal;
    const codlineaauxx = req.params.cod_servicio;
    const response = await pool.query('DELETE FROM ASIGNADO WHERE cedula_personal = $1 AND cod_servicio = $2', [codlineaaux,codlineaauxx]);
    res.json('ASIGNADO COD ${codlineaaux} DELETED');
};

const updateAsignadoByCod = async (req,res) => {
    const codlineaaux = req.params.cedula_personal;
    const codlineaauxx = req.params.cod_servicio;
    const { cedula_personal, cod_servicio } = req.body;
    const response = await pool.query('UPDATE ASIGNADO SET cedula_personal = $1, cod_servicio = $2 WHERE cedula_personal = $3 AND cod_servicio = $4', [ cedula_personal, cod_servicio, codlineaaux, codlineaauxx ]);
    res.json('ASIGNADO COD ${codlineaaux} OF SERVICE ${codlineaauxx} UPDATED');
};

module.exports = {
    getCliente,
    postCliente,
    getClienteByCod,
    deleteClienteByCod,
    updateClienteByCod,

    getAsignado,
    postAsignado,
    getAsignadoByCod,
    deleteAsignadoByCod,
    updateAsignadoByCod,

    getPersonal,
    postPersonal,
    getPersonalByCod,
    deletePersonalByCod,
    updatePersonalByCod,

    getActividad,
    postActividad,
    getActividadByCod,
    deleteActividadByCod,
    updateActividadByCod,

    getTipoVehiculo,
    postTipoVehiculo,
    getTipoVehiculoByCod,
    deleteTipoVehiculoByCod,
    updateTipoVehiculoByCod,

    getMarcaVehiculo,
    postMarcaVehiculo,
    getMarcaVehiculoByCod,
    deleteMarcaVehiculoByCod,
    updateMarcaVehiculoByCod,

    getVehiculo,
    postVehiculo,
    getVehiculoByCod,
    deleteVehiculoByCod,
    updateVehiculoByCod,

    getCiudad,
    postCiudad,
    getCiudadByCod,
    deleteCiudadByCod,
    updateCiudadByCod,

    getLocal,
    postLocal,
    getLocalByCod,
    deleteLocalByCod,
    updateLocalByCod,


}
*/ 
