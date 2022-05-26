console.log("")
console.log("Ejercicios 4")

// Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
// mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]

console.log("");
console.log("Ejercicio 4.1")
var randomNumber = Math.random()
if (randomNumber > 0.5) {
    console.log("Greater than 0,5")
} else {
    console.log("Lower than 0,5")
}

// Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// “Menor” si la edad es menor a 18
// “Mayor” si la edad es mayor o igual a 18 Y menor que 65
// “Jubilado” si la edad es mayor o igual que 65.

console.log("");
console.log("Ejercicio 4.2")
var age = Math.floor(Math.random() * 100);
console.log(age);
if (age < 18) {
    console.log("Menor");
} else if (age >= 18 && age <= 65) {
    console.log("Mayor");
} else if (age >= 65) {
    console.log("Jubilado");
}
console.log("");
console.log("------------------------------------------------");