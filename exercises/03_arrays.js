console.log("")
console.log("Ejercicios 3")

// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
// mostrar por consola los meses 5 y 11.

var arrayMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("");
console.log("Ejercicio 3.1")
console.log(arrayMonths[4], arrayMonths[10]);

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log("");
console.log("Ejercicio 3.2")
console.log(arrayMonths.sort());

// Agregar un elemento al principio y al final del array (utilizar unshift y push).

arrayMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arrayMonths.push("Mes 13");
arrayMonths.unshift("Mes 0");
console.log("");
console.log("Ejercicio 3.3");
console.log(arrayMonths);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log("");
console.log("Ejercicio 3.4");
arrayMonths.shift();
arrayMonths.pop();
console.log(arrayMonths);

// Invertir el orden del array (utilizar reverse).

console.log("");
console.log("Ejercicio 3.5");
console.log(arrayMonths.reverse());

// Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

arrayMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("");
console.log("Ejercicio 3.6");
var stringArray = arrayMonths.join("-");
console.log(stringArray);

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log("");
console.log("Ejercicio 3.7");
var arrayMonthSliced = arrayMonths.slice(4, 11);
console.log(arrayMonthSliced);
console.log("");
console.log("------------------------------------------------");