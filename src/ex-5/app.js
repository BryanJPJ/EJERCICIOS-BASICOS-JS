// Escribe un programa que pida dos números 
// y escriba en la pantalla cual es el mayor.

function greaterthanOperation () {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const int1 = (parseInt(number1));
    const int2 = (parseInt(number2));
    if (int1 > int2) {
        alert('Este número es el mayor: ' + int1);
    }
    else {
        alert('Este número es el mayor: ' + int2);
    }
    
}