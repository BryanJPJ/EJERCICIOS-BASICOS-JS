// Escribe un programa que pida 3 números
// y escriba en la pantalla el mayor de los tres.

function greaterthanOperation() {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  const number3 = document.getElementById("number3").value;
  let int1 = parseInt(number1);
  let int2 = parseInt(number2);
  let int3 = parseInt(number3);
  let greaterNumber = int1;
  if (int2 > greaterNumber) {
    greaterNumber = int2;
  }
  if(int3 > greaterNumber) {
    greaterNumber = int3;
  }
  alert("Este número es el mayor: " + greaterNumber);
}
