console.log("")
console.log("Ejercicios 5")

// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
// para mostrar una alerta utilizando cada una de las palabras.

console.log("");
console.log("Ejercicio 5.1")
var arrayWords = ["enero", "febrero", "marzo", "abril", "mayo"];
for (var i = 0; i < arrayWords.length; i++) {
    console.log(arrayWords[i]);
}

//Al array anterior convertir la primera letra de cada palabra en mayúscula y 
// mostrar una alerta por cada palabra modificada.

console.log("");
console.log("Ejercicio 5.2")
for (var i = 0; i < arrayWords.length; i++) {
    let word = arrayWords[i];
    word = word.substring(0,1).toUpperCase() + word.substring(1);
    console.log(word);
}

// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, 
// es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 
// hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

console.log("");
console.log("Ejercicio 5.3")
var arrayNumbers = [];
for (var i = 0; i < 10; i++) {
    arrayNumbers.push(i);
}
console.log(arrayNumbers);
console.log("");
console.log("------------------------------------------------");