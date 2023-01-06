// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
let phrase = prompt('Por favor escriba una frase y pulse (aceptar) para obtener las vocales');
let containerForAs = [];
let containerForEs = [];
let containerForIs = [];
let containerForOs = [];
let containerForUs = [];
for(let i = 0; i < phrase.length; i++) {
	if (phrase[i].toLowerCase() === "a") {containerForAs.push(i); alert('La letra A aparece: ' + containerForAs.length) + ' veces';};
    if (phrase[i].toLowerCase() === "e") {containerForEs.push(i); alert('La letra E aparece: ' + containerForEs.length) + ' veces';};
    if (phrase[i].toLowerCase() === "i") {containerForIs.push(i); alert('La letra I aparece: ' + containerForIs.length) + ' veces';};
    if (phrase[i].toLowerCase() === "o") {containerForOs.push(i); alert('La letra O aparece: ' + containerForOs.length) + ' veces';};
    if (phrase[i].toLowerCase() === "u") {containerForUs.push(i); alert('La letra U aparece: ' + containerForUs.length) + ' veces';};
}