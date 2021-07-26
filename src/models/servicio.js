const { Sequelize } = require('sequelize');
const { sequelize } = require('../database/database');
const { Actividad } = require ('../models/actividad');

const Servicio = sequelize.define('servicio',{
    cod_servicio: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombreserv:{
        type: Sequelize.TEXT
    },
    descripcionserv:{
        type: Sequelize.TEXT
    },
    anticipacion:{
        type: Sequelize.INTEGER
    },
    reserva:{
        type: Sequelize.TEXT
    }
},
{
    timestamps: false,
});

Servicio.hasMany( Actividad , { foreignKey: 'cod_servicio', sourceKey: 'cod_servicio' });
Actividad.belongsTo( Servicio, { foreignKey: 'cod_servicio', sourceKey: 'cod_servicio' });

module.exports = {
    Servicio
}
