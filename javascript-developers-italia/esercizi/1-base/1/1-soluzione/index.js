const body = document.getElementsByTagName("body")[0]; //prende il primo elemento con tag body, quindi il body della pagina
const paragraph = document.createElement("p"); //crea un paragrafo (elemento html)
paragraph.textContent = "Hello World!"; //aggiunge il testo all'interno del paragrafo
body.appendChild(paragraph); //aggiunge l'elemento paragraph in coda (append) ai tag già presenti nel body