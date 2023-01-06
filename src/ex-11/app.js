// Escribe un programa que pida un número y
//  nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let number = prompt('Por favor escriba un número para comprobar si es divisible por 2, 3, 5 o 7');
if ((number % 2) === 0 || (number % 3) === 0 || (number % 5) === 0 || (number % 7) === 0){
    alert('Es divisible por 2, 3, 5 o 7')
} else {
    alert('No es divisible 2, 3, 5 o 7')
}