import express from 'express';
import { formularioLogin, formularioRegistro, registrar, formularioOlvidePassword} from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
router.post('/registro', registrar);
router.get('/olvide-password', formularioOlvidePassword);

// router.get('/login', (req, res) =>{
//     res.render('auth/login',{
//         autenticado: true
//     });
// });

// router.post('/', (req, res) =>{
//     res.json({msg: 'Respuesta de tipo post'});
// });

export default router
