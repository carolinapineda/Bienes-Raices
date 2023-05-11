import express from 'express';
import { formularioLogin } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/login', formularioLogin);

// router.get('/login', (req, res) =>{
//     res.render('auth/login',{
//         autenticado: true
//     });
// });

// router.post('/', (req, res) =>{
//     res.json({msg: 'Respuesta de tipo post'});
// });

export default router
