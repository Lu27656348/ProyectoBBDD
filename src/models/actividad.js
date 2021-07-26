const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');

const Actividad = sequelize.define('servicio',{
    nro_consecutivo: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cod_servicio: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.TEXT
    },
    descripcion:{
        type: Sequelize.TEXT
    },
    capacidad:{
        type: Sequelize.INTEGER
    },
    costo:{
        type: DataTypes.REAL(11,2),
    }
},
{
    timestamps: false,
});

module.exports = {
    Actividad
}
