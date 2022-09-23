//1
const name = "Javascript Developers Italia"; //dichiara una costante di tipo stringa e la inizializza al valore: "Javascript Developers Italia"

//2
const h1El = document.createElement("h1"); //crea un elemento html di tipo <h1>
h1El.textContent = "Questo è un header di tipo h1"; //aggiunge del testo all'interno dell'elemento <h1> creato

//3
const body = document.getElementsByTagName("body")[0]; //referenzia il body del documento html nel quale index.js è eseguito
body.insertAdjacentElement("afterbegin",h1El); //aggiunge il tag <h1> creato al body (esattamente dopo la chiusura del tag <body>)

//4
const paragraph = document.createElement("p"); //crea un elemento html di tipo <p>
paragraph.textContent = `Ciao mi chiamo ${name}`; //aggiunge del testo al paragrafo creato, e questo steso è una stringa creata dinamicamente

//5
h1El.insertAdjacentElement("beforebegin",paragraph); //inserisce il paragrafo creato al punto 4, esattamente prima del tag h1 inserito al punto 3
