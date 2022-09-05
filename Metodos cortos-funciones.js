"daniel".charAt(n) //==> te volvera la letra q deseas  don "n" toma un numero empezando desde 0

"daniel".toUpperCase() //==> convertira el String completo en Mayuscula si solo ocupas una letra, deberas usar "charAt".
"DANIEL".toLowerCase() //==> convertira a minuscula
"daniel".slice(n) //==> te deolvere el resto del String.
//ejemplo:
"daniel".slice(2) //==> devolvera "niel" omitiendo las 2 primeras letras.

Object.entries(objeto) //==> devolvera el objeto convertido en array [propiedad, valor].
//ejemplo:
Object.entries({nombre: "daniel", apellido: "Martel"}) //==> devolvera [["nombre", "daniel"], ["apellid", "Martel"]].

Object.keys(objeto) //==> devolvera solo las Propiedades del array.
Object.values(objeto) //==> devolvera solo los valores del array.

"qqwweerrwwttffwwss".split("w") //==> devuelve un array dividido en este caso devuelve ['qq', '', 'eerr', '', 'ttff', '', 'ss']
                                //==> ('') es devido a que hay 2 letras juntas de no ser asi no devuelve nada

Array.sort() //==> tiene q ser un array de String, devolvera de forma ascendete alfabeticamente. 
             //==> priorizara las Mayusculas ejem: [Daniel,arriba, Habito] devolvera ==> [Daniel, Habito, arriba]
Array.sort(function(a,b){return a-b}) // array de numeros, retornara de forma ascendete de menor a mayor los numeros
Array.reverse() //  retornara de forma descendente usarlo despues del sort "Array.sort().reverse()"

Array.join("") //Convierte Array en String, dentro del parentesis es el separador q puede ser vacio o cualquiete otro String
//Ejemplo:
var a = ["Hola","daniel","eres","un","pro"];
a.join(" ") //==> devolvera 'Hola daniel eres un pro' //el argumento recibido se convierte en el separador