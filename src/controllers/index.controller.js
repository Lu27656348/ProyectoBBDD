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

module.exports = {
    getServicio,
    postServicio,
    getServicioByCod,
    deleteServicioByCod,
    updateServicioByCod
}