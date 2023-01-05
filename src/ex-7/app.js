// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
let phrase = prompt('Por favor escriba una frase y pulse (ok) para contabilizar el numero de as');
let containerForVocals = [];
for(let i = 0; i < phrase.length; i++) {
	if (phrase[i].toLowerCase() === "a") containerForVocals.push(i);
}
alert('La letra A se repite: ' + containerForVocals.length + " veces");