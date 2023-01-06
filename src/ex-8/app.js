// Escribe un programa que pida una frase y escriba las vocales que aparecen
let phrase = prompt('Por favor escriba una frase y pulse (aceptar) para obtener las vocales');
let matchVocals = phrase.match(/[aeiou]/gi);
alert('La vocales obtenidas son: ' + matchVocals);