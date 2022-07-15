// CallBack ".reduce", se utiliza al momento de declarar una variable, sumara todos los elementos de un array ya existente
// y los colocara dentro del nuevo array q esta siendo creado
// ejemplo:
// creacion de variable array
var a = [1,2,3,4,100];

// creando variable y dandole como valor la suma de los elementos de "a"
var b = a.reduce(function(acc, elemento) {
    return acc+elemento;
})

// "b" obtendra como valor "110" (la suma de los elementos de "a")