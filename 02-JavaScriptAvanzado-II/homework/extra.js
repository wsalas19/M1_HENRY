/*Crear un método repeatify que este disponible para todos los objetos Strings. 
Esta función debe aceptar un entero que indica cuantas veces el string tiene que repetirse. 
La función retorna el string repetido el número de veces que indicamos. 
Controlar que el número no sea menor que cero, y si es cero que devuelva '' (String vacío).*/

String.prototype.repeatify = function (num) {
    let repeated = this;
    if (num === 0) {
        return "(vacío)";
    }
    for (let i = 0; i < num; i++) {
        repeated += this;
    }
    return repeated;
}

//Test

let a = "Hola"
a
console.log(a.repeatify(5))



//Esta funcion genera tablas de multiplicar.

function creadorTablaMultiplicar(factor) {
    return function (arr) {
        let tabla = [];  //defino una variable temporal heredable que almacena los valores un un array;
        for (let element of arr) {
            tabla.push(element * factor);
        }
        return tabla;
    }
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tabladel2 = creadorTablaMultiplicar(2);
let tabladel3 = creadorTablaMultiplicar(3);
console.log(tabladel2(numeros));
console.log(tabladel3(numeros));









