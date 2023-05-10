
import express  from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

// Crear la app
const app = express();

// Routing
app.get('/', usuarioRoutes);

// Definir un puerto ny arrancarlo
const port = 3000;

app.listen(port, ()=>{
    console.log('El servidor esta corriendo en el puero', port);
});