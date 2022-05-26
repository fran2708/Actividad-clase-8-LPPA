console.log("")
console.log("Ejercicios 6")

// Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
// guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log("");
console.log("Ejercicio 6.1")
var sum = (a, b) => {
    return a + b;
}
console.log(sum(3,5));

// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
// mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log("");
console.log("Ejercicio 6.2")
var sumChecked = (a,b) => {
    if (isNaN(a)) {
        return console.log("First argument is not a number");
    } else if (isNaN(b)) {
        return console.log("Second argument is not a number");
    } else {
        return console.log (a + b);
    }
}
sumChecked(5,"asd");

// A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
// En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log("");
console.log("Ejercicio 6.3")
var message = "";
var sumDoubleChecked = (a,b) => {
    if (isNaN(a)) {
        return console.log("First argument is not a number");
    } else if (isNaN(b)) {
        return console.log("Second argument is not a number");
    } else {
        if (!Number.isInteger(a)) {
            console.log("First argument is not an integer");
            let roundedA = Math.round(a);
            console.log(roundedA + b)
        } else if (!Number.isInteger(b)) {
            console.log("Second argument is not an integer");
            let roundedB = Math.round(b);
            console.log(a + roundedB)
        }
    }
}
sumDoubleChecked(3.6,5);