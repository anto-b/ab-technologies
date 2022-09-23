const array = ["Roma", "Milano", "Torino", "Bari", "Bologna", "Lazio"]; //definisce il vettore

const cittaItaliane = { 

    nomi: ["Firenze", "New York"],

    paese: "Italia"

}; //definisce l'oggetto

//1
cittaItaliane.nomi[1] = "Verona"; //prima accede alla proprietà nomi, successivamente cambia il valore dell'ultimo elemento del vettore

//2
array[4] = cittaItaliane.nomi[1]; //prende il nuovo valore e lo sostituisce a "Bologna"

console.log(cittaItaliane)
console.log(array)