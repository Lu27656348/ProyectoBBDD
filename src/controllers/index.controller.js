const { Pool }= require('pg');

const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'Lu27656348',
    database: 'PBBDD'
}

const pool = new Pool(config);

/* MÉTODOS PARA LA TABLA SERVICIO*/
/*EXTRAER TODA LA TABLA*/
const getServicio = async (req,res) => {
    const response = await pool.query('SELECT * FROM SERVICIO');
    res.json(response.rows);
};
/*SELECCIONAR SERVICIO EN ESPECIFICO*/
const getServicioByCod = async (req,res) => {
    const codlineaaux = req.params.codlinea;
    const response = await pool.query('SELECT * FROM SERVICIO WHERE cod_servicio = $1', [codlineaaux]);
    res.json(response.rows);
};
/*SELECCIONAR SERVICIO EN ESPECIFICO*/
const postServicio = async (req,res) => {
    const { nombreserv, descripcionserv, anticipacion, reserva } = req.body;
    const response = await pool.query('INSERT INTO SERVICIO (nombreserv,descripcionserv,anticipacion,reserva) VALUES ($1,$2,$3,$4)',[nombreserv,descripcionserv,anticipacion,reserva]);
};

const deleteServicioByCod = async (req,res) => {
    const codlineaaux = req.params.cod_servicio;
    const response = await pool.query('DELETE FROM SERVICIO WHERE cod_servicio = $1', [codlineaaux]);
    res.json('SERVICIO COD ${codlineaaux} DELETED');
};

const updateServicioByCod = async (req,res) => {
    const codlineaaux = req.params.cod_servicio;
    const { cod_servicio, nombreserv,descripcionserv,anticipacion,reserva } = req.body;
    const response = await pool.query('UPDATE SERVICIO SET cod_servicio = $1, nombreserv = $2, descripcionserv = $3, anticipacion = $4, reserva = $5 WHERE cod_servicio = $6', [cod_servicio,nombreserv,descripcionserv,anticipacion,reserva,codlineaaux]);
    res.json('LINEA COD ${codlineaaux} UPDATED');
};

/* MÉTODOS PARA LA TABLA CLIENTE*/
const getCliente = async (req,res) => {
    const response = await pool.query('SELECT * FROM CLIENTE');
    res.json(response.rows);
};
/*SELECCIONAR SERVICIO EN ESPECIFICO*/
const getClienteByCod = async (req,res) => {
    const codlineaaux = req.params.cedula_cliente;
    const response = await pool.query('SELECT * FROM CLIENTE WHERE cedula_cliente = $1', [codlineaaux]);
    res.json(response.rows);
};
/*SELECCIONAR SERVICIO EN ESPECIFICO*/
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
/* MÉTODOS PARA LA TABLA VEHICULO*/
const getVehiculo = async (req,res) => {
    const response = await pool.query('SELECT * FROM VEHICULO');
    res.json(response.rows);
};
/*SELECCIONAR SERVICIO EN ESPECIFICO*/
const getVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.cod_vehiculo;
    const response = await pool.query('SELECT * FROM VEHICULO WHERE cod_vehiculo = $1', [codlineaaux]);
    res.json(response.rows);
};
/*SELECCIONAR SERVICIO EN ESPECIFICO*/
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
/* MÉTODOS PARA LA TABLA TIPO-VEHICULO*/
const getTipoVehiculo = async (req,res) => {
    const response = await pool.query('SELECT * FROM TIPOVEHICULO');
    res.json(response.rows);
};
/*SELECCIONAR SERVICIO EN ESPECIFICO*/
const getTipoVehiculoByCod = async (req,res) => {
    const codlineaaux = req.params.cod_tipovehiculo;
    const response = await pool.query('SELECT * FROM TIPOVEHICULO WHERE cod_tipovehiculo = $1', [codlineaaux]);
    res.json(response.rows);
};
/*SELECCIONAR SERVICIO EN ESPECIFICO*/
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
/* MÉTODOS PARA LA TABLA CIUDAD*/
const getCiudad = async (req,res) => {
    const response = await pool.query('SELECT * FROM CIUDAD');
    res.json(response.rows);
};
/*SELECCIONAR SERVICIO EN ESPECIFICO*/
const getCiudadByCod = async (req,res) => {
    const codlineaaux = req.params.nombre_ciudad;
    const response = await pool.query('SELECT * FROM CIUDAD WHERE nombre_ciudad = $1', [codlineaaux]);
    res.json(response.rows);
};
/*SELECCIONAR SERVICIO EN ESPECIFICO*/
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
module.exports = {
    getCliente,
    postCliente,
    getClienteByCod,
    deleteClienteByCod,
    updateClienteByCod,

    getTipoVehiculo,
    postTipoVehiculo,
    getTipoVehiculoByCod,
    deleteTipoVehiculoByCod,
    updateTipoVehiculoByCod,

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

    getServicio,
    postServicio,
    getServicioByCod,
    deleteServicioByCod,
    updateServicioByCod


}