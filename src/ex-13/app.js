// Escribir un programa que escriba en pantalla los divisores de un número dado
let number = prompt('Por favor escriba un número');
let i;
for (i = 0; i < number; i++) {
    if ((number % i) === 0){
        alert('Estos son los divisores de '+ number + ": " + i)
    }
}