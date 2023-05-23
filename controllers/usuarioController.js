
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

const formularioOlvidePassword = (req, res) =>{
    res.render('auth/registro',{
        pagina: 'Crear Cuenta'
    });
}


export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword
}