// Escribir un programa que nos diga si un número dado
//  es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
let number = prompt('Por favor escriba un número');
let primeNumber = true;
let i;
for (let i = 2; i < number; i++) {
    if (number % i === 0){
        primeNumber = false;
    }
}

if(primeNumber = true) {
    alert( number +' es un numero primo');
} else {
    alert(number + ' no es un numero primo')
}