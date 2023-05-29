// Este es un modelo para los usuarios

import {DataTypes} from 'sequelize'
import db from '../config/db.js'

//define() es para definir un modelo y dentro de los parentesis va el nombre del modelo
const Usuario = db.define('usuarios',{
    nombre: {
        type: DataTypes.STRING,
        // allowNull quiere decir que este campo no puede ir vacio.
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
})

export default Usuario;