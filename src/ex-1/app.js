 /* Escribe un programa que escriba en la pantalla
  un texto de tipo <h1> que diga “Hello Javascript”. */

  /* 1º Definir el contenedor en el documento HTML
  donde enlazará con nuestro JS
  2º Comprobar que están enlazados de forma correcta
  con una variable y un console log*/

  let texto = document.getElementById('titulo');
  texto.innerHTML = '<h1>Hello Javascript</h1>';
 