// Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.
let phrase = prompt('Por favor escriba una frase y pulse (aceptar) para obtener las vocales');
let numberVocals = phrase.match(/[aeiou]/gi).length;
alert('El número de vocales obtenidas son: ' + numberVocals);