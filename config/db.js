
import Sequelize  from "sequelize";

const db = new Sequelize('bienesraices_node', 'root', '12345678',{
    host: 'localhost',
    pot: 3306,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    // Pool => Configura como va a ser el comportamiento de nuevas o existentes conexiones a las paginas web.
    /*Lo que trata de hacer Sequelize es mantener o reutilizar las conexiones que esten vivas, por eso se le pasa un pool 
    para que en caso de haber una conexion viva se siga utilizando y que no se crea una nueva.*/
    pool: {
        // max => Maximo de conexiones a mantener. 
        max: 5,
        // min => Minimo 0 conexiones el cual cuando no hay actividad en el sitio se desconectaria todo para liberar algunos recursos.
        min: 0,
        // acquire => (Serian 30000 milisegundos = 30 segundos) es el tiempo que va a pasar tratando de elaborar una conexion antes de marcar un error.
        acquire: 30000,
        // idle => (Serian 10 segundos) si nadie esta utilizando el proyecto, da 10 segundos para que la conexion finalice.
        idle: 10000
    }
});
