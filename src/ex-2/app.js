// Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.
const mainText = "La suma de 3 + 5 es: ";
let result = 3 + 5;
let finalText = document.getElementById('display');
finalText.innerHTML =  mainText + result;