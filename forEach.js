//ejecutara cada uno de los elementos de un Array, no retornara nada
//Ejemplo:

//creacion de una variable Array
var w = [1,2,3,4,5,6];

//ejecutando forEach, mostrara cada uno de los elementos
w.forEach(function(elemento) {
    console.log(elemento);
})

//añadiendo acciones con las cuales poder trabajar solo es un ejemplo, puedes hacer muchas mas cosas
//creando una variable array vacia:
var e = [];

//pusheando los elementos de W en E con forEach
w.forEach(function(elemento) {
    e.push(elemento);
})

//mostrando los elementos añadidos del array "w" hacia al array "e"
e.forEach(function(elemento) {
    console.log(elemento);
})