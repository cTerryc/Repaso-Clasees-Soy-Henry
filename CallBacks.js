//Es una Funcion q contiene una funcion (sin ser invocada) en uno de sus parametros.
//Ejemplo:
//funcion q retorna un saludo
function saludar(parametro) {
    return "Hola " + parametro;
}

//funcion q contiene otra funcion en su parametro
function crearSaludo(usuario, cb) {
    return cb(usuario);
}

//ejecutando el CalBakc
crearSaludo("Terry", saludar);

//la ejecucion del CallBack seria de la siguiente manera
crearSaludo("Terry", function saludar(parametro) {
    return "Hola " + parametro;
})
