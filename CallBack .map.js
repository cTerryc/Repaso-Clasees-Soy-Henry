//CallBack ".map" se usa al momento de declarar una variable Array, CallBack ".map" retornara los elementos de un 
//array ya existente y los colocara dentro de la nueva variable array que esta siendo declarada.
//Ejemplo
var a = [1,2,3,4,5,6];

//Creando nueva variable array con el Callbacl ".map"
var b = a.map(function(elemento) {
    return elemento;
})

//con el return puedes realizar varias acciones diferentes como multiplicar los elementos, entre otras cosas
//ejemplo  :
var t = a.map(function(elemento) {
    return elemento * 3;
})

//esto retornara t = [3, 6, 9, 12, 15, 18]