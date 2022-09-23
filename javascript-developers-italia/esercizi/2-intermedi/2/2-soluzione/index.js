function decrypt(cryptedtMsg){
    let alphabeticString = cryptedtMsg.replace(/[^a-z]/ig,""); //rimuove ogni carattere speciale
    return alphabeticString.split("").reverse().join(""); //separa la stringa in un array, inverte l'array, restituisce la stringa
}

console.log(decrypt("d89%l++5r19o7W *o=l645le9H")); //Stampa HelloWorld sulla console

