// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
//No me sale
let number = prompt('Por favor escriba un número');
let containerNumbers = [];
for (i = 0; i < number; i++) {
    if ((number % i) === 0) containerNumbers.push(i);  
}
alert('Este es el numero total de divisores de '+ number + ": " + containerNumbers.length)


let number2 = prompt('Escriba otro número');
let containerNumbers2 = [];
for (i = 0; i < number2; i++) {
    if ((number2 % i) === 0) containerNumbers2.push(i);  
}
alert('Este es el numero total de divisores de '+ number2 + ": " + containerNumbers2.length)
