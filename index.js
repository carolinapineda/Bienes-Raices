
import express  from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

// Crear la app
const app = express();

// Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Carpeta Publica 
app.use(express.static('public'));

// Routing
// get busca especificamente una ruta con ('/'), mientras que use busca todas las rutas que tengan o coincidan con ('/')
app.use('/auth', usuarioRoutes);

// Definir un puerto ny arrancarlo
const port = 3000;

app.listen(port, ()=>{
    console.log('El servidor esta corriendo en el puero', port);
});