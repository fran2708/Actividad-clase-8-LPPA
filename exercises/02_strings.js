console.log("")
console.log("Ejercicios 2")

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log("Ejercicio 2.1");
var string15Chars = "loremipsumdolor"
var string5First = string15Chars.substring(0, 5);
console.log(string15Chars);
console.log(string5First);
console.log("");

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log("Ejercicio 2.2");
var string1Upper = string15Chars.substring(0, 1).toUpperCase() + string15Chars.substring(1);
console.log(string1Upper);
console.log("");

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log("Ejercicio 2.3");
var stringWithSpace = "lorem ipsum";
var whiteSpace = " ";
var whiteSpacePosition = stringWithSpace.indexOf(whiteSpace);
console.log(stringWithSpace);
console.log(whiteSpacePosition);
console.log("");
console.log("------------------------------------------------");