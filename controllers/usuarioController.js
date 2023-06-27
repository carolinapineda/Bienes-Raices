import Usuario from '../models/Usuario.js'

// Funcion de controlador
const formularioLogin = (req, res) =>{
    res.render('auth/login',{
        pagina: 'Iniciar Sesion'
    });
}

const formularioRegistro = (req, res) =>{
    res.render('auth/registro',{
        pagina: 'Crear Cuenta'
    });
}

const registrar = (req, res) =>{

    console.log(req.body) 
 
    // const usuario = await Usuario.create(req.body)

    // res.json(usuario)
}

const formularioOlvidePassword = (req, res) =>{
    res.render('auth/olvide-password',{
        pagina: 'Recupera tu acceso a Bienes Raices'
    });
}


export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
    
}