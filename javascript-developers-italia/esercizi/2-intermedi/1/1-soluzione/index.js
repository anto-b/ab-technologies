/* 
La logica di risoluzione è molto semplice, 
per capire se un carattere è ripetuto basta confrontare in sequenza crescente tutti i caratteri della stringa.
Si parte dal primo e lo si confronta con i restanti caratteri, se uno di questi è uguale al primo si restituisce true,
altrimenti si passa al secondo e si ripete lo stesso procedimento.
Se nessun riscontro è stato trovato allora si restituisce false.
*/
function repeatedChars(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i+1; j < string.length; j++) {
            if (string[j] === string[i]) return true
        }
    }
    return false;
}
