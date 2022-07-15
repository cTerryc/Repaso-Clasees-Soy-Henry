//Costructor ES6
class Persona {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    //metodos(prototype) de la clase Persona
    getNombre() {
        return this.nombre;
    }
    saludar() {
        return "hola " + this.nombre;
    }
}

//creacion de  var objeto instancia Persona.
var terry = new Persona("Daniel", "Martel")

//-------------------------//

//SubClase en este caso, Persona ==> Empleado
class Empleado extends Persona {
    constructor (nombre, apellido, empleo, sueldo) {
        super(nombre, apellido);
        this.empleo = empleo;
        this.sueldo = sueldo;
    }
}

//creacion de instacia empleado
var daniel = new Empleado("Cod", "Chavez", "Programador", "500USD");



    