//funcion constructor basica de una clase en este caso la clase se llama "Usuario"
//las clases creadas se llaman "Instancias de Usuario"
//"|| ValorDefecto" se puede seliminar y solo usar "nombre".
function Usuario(nombre, github) {
    this.nombre = nombre || "ValorDefecto";
    this.github = github || "ValorDefecto";
}

//Creara un prototype(metodo) para una clase ene ste caso Usuario, si se desea para otra clase
//Hay q cambiar el nombre inicial por el nombre de la clase deseada : 
//"Usuario.prototype" ==> "Otronombre.prototype"
Usuario.prototype.introduccion = function() {
    return "Mi nombre es " + this.nombre + ", mi usuario de Hithub es " + this.github + ".";
}
ƒ () {
    return "Mi nombre es " + this.nombre + ", mi usuario de Hithub es " + this.github + ".";
}

//creara un objeto instacia Usuario, si desea otra, cambiar: Usuario ==> OtroNombre
let juan = new Usuario("Juan", "juan.perez");


let antonio = new Usuario("Antonio", "atralice");

console.log(juan.introduccion())
//Mi nombre es Juan, mi usuario de Hithub es juan.perez.

console.log(antonio.introduccion())
//Mi nombre es Antonio, mi usuario de Hithub es atralice.

