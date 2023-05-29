
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
 
    console.log('registrando ..')
    // Siempre que se va a leer la informacion que se ingresa a un formulario en express se utiliza el req.body
    console.log(req.body)
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