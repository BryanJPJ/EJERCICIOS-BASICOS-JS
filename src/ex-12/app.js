// Añadir al ejercicio anterior que nos diga 
// por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let number = prompt('Por favor escriba un número para comprobar si es divisible por 2, 3, 5 o 7');
if ((number % 2) === 0 || (number % 3) === 0 || (number % 5) === 0 || (number % 7) === 0){
    if ((number % 2) === 0) {
        alert("Es divisible por 2. ");
        }
    if ((number % 3) === 0) {
        alert("Es divisible por 3. ");
        }
    if ((number % 5) === 0) {
        alert("Es divisible por 5. ");
        }
    if ((number % 7) === 0) {
       alert("Es divisible por 7. ");
        }
    } else {
        alert("No es divisible por 2, 3, 5 o 7");
        }
        