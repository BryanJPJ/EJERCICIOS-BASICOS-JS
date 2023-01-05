// Escribe un programa que pida dos números y escriba 
// “La suma de <numero-uno> con <numero-dos> es <resultado>”.

function additionOperation () {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const result = (parseInt(number1)) + (parseInt(number2));
    alert('La suma de ' + number1 + ' con ' + number2 + ' es ' + result);
}