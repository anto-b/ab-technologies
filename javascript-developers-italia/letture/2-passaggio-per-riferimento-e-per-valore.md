# **Passaggio per riferimento e per valore**

<br>

<div align="center">
        <img src="https://telegra.ph/file/138ce7074efb3a452ee2a.png" width="690" height="145"/>
</div>
<div align="center">Fonte immagine: google - scaler</div>

<br>

## **Requisiti Preliminari**
* Conoscenza del concetto di variabile

<br>

## **Introduzione**
In questo articolo di [Javscript Developers Italia](https://t.me/javascript_developers_italia "Javascript Developers Italia Community") esploreremo uno dei concetti più importanti della programmazione, hai letto bene, non si tratta di un concetto relativo a esclusivamente a Javascript, ma si tratta di un concetto condiviso tra molti linguaggi di programmazione, nonché di un **concetto fondamentale per poter scrivere del codice corretto e funzionale**.

Quindi prenditi qualche istante di tempo per imparare ed approfondire questo importante concetto purtroppo spesso trascurato da molti.

Come anticipato il linguaggio di riferimento per gli esempi sarà Javascript, ma il concetto si applica a molti altri linguaggi, inoltre si tratterà di esempi molto basilari che richiedono solamente la conoscenza del concetto di variabile, ma non preoccuparti ti spiegherò tutto nella maniera più chiara e semplice possibile 😊 

<br>

## **I tipi di dati**
Come forse ti sarà già noto esistono differenti tipi di dati, ma che possiamo raggruppare in due grandi famiglie:

1. Primitivi
2. Oggetti (*spesso chiamati dati complessi o astratti*)

I dati del tipo *Primitivo* sono i dati più semplici con il quale è possibile lavorare, si tratta in generale di: stringhe, numeri e valori booleani;
volendo andare nello specifico in Javascript esistono **5 tipi di dati primitivi** e sono: ```undefined, null, boolean, string, numbers```

<br>

volendo approfondire:

* *undefined* rappresenta un dato non definito ,
* *null* rappresenta il valore vuoto (empty),
* *boolean* il valore logico vero o falso,
* *stringa* un insieme di caratteri alfanumerici,
* *numbers* dei valori aritmetici con il quale fare operazioni algebriche.

<br>

I tipi di dati *Complessi*, spesso chiamati *Oggetti*, o ancora *Astratti*, **sono tipicamente 3** *vettori, oggetti propriamente detti, funzioni*

<br>

volendo approfondire:

* *vettori* anche detti array, sono un insieme di tipi di dati primiti o complessi organizzati in una struttura logica matriciale che può avere più dimensioni, il vettore più semplice è il vettore monodimensionale 1xn ovvero 1 riga ed n colonne,
* *oggetti*, sono utilizzati per astrarre entità del mondo reale,
* *funzioni*, si tratta di blocchi logici di codice.

<br>

Se hai difficoltà nel capire quali sono i tipi di dato, ti consiglio di guardare il [video dedicato alle variabili](https://www.youtube.com/watch?v=_tL-xbHUXjM) pubblicato sul canale Youtube, oppure entrare a far parte della [community](https://t.me/javascript_developers_italia) per chiedere maggiori informazioni.

<br>

> Riassumendo, essenzialmente abbiamo 2 tipi di dato e questi sono trattati in maniera differente in fase di esecuzione

<br>

## **Passaggio di un dato per valore** 
Quando creiamo una variabile in realtà quello che stiamo facendo è creare un puntatore ad un indirizzo di memoria, senza scendere nei dettagli, è comunque importante sapere che 

<br>

> dichiarare una variabile equivale a creare un puntatore verso un blocco di memoria, avente un proprio indirizzo univoco, nel quale poi sarà memorizzato il valore di quella variabile

<br>

Supponiamo di avere il seguente codice

<div align="center">
        <img src="https://telegra.ph/file/252893fcb465ed7dd5e02.png" width="690" height="260"/>
</div>

Alla riga 1, dichiariamo la variabile a e la inizializziamo al valore 5 (che è un tipo di dato primitivo), ma quello che in realtà stiamo facendo è creare un puntatore ad un blocco di memoria nel quale sarà memorizzato il valore 5.

Quindi ogni qual volta dichiariamo per la prima volta  una variabile, stiamo creando un puntatore ad un blocco di memoria (il quale avrà un suo indirizzo di memoria univoco).



Alla riga 2 dichiariamo una variabile b e la inizializziamo al valore di a, ed è qui che avviene la magia, poichè a conteneva un tipo di dato primitivo, allora b punterà ad un nuovo blocco di memoria, differente da quello di a, ed in questo nuovo blocco verrà copiato il valore corrente di a (ovvero 5), da questo momento in poi a e b punteranno a due blocchi di memoria *differenti*!



Ripetiamo con calma quello che abbiamo detto, osservando questa figura esplicativa

<br>

<div align="center">
        <img src="https://telegra.ph/file/4528cc74d03906382902f.png" width="690" height="340"/>
</div>
<div align="center">Fonte immagine: Anthony Alicea — Udemy.com</div>

<br>

Abbiamo detto che la variabile a punta ad un suo blocco di memoria avente ad esempio indirizzo 0x001, nel momento in cui inizializziamo b al valore di a, poichè a contiene un tipo di dato primitivo, allora b punterà ad un nuovo blocco di memoria con indirizzo 0x002 ed in questo blocco viene copiato il valore corrente di a, 

da questo momento in poi i due blocchi di memoria conterranno lo stesso valore, ma sono due blocchi ben **distinti** tra loro!

Motivo per cui se alla riga 7 cambiamo il valore di a, ponendolo uguale ad 1, quello che stiamo facendo è cambiare il valore contenuto nel blocco di memoria all'indirizzo 0x001, ma **non** cambieremo in alcun modo il valore presente nel blocco di memoria all'indirizzo 0x002, ovvero quello puntato da b.

Andando a stampare il valore di a e b, dopo aver modificato a, otterremo rispettivamente 1 e 5!

Riassumendo, quando si lavora con tipi di dato primitivi il valore del dato è effettivamente memorizzato in locazioni di memoria distinte per ogni variabile, in parole più semplici:

<br>

> ogni variabile conterrà una propria copia distinta del dato

<br>

## **Passaggio di un dato per riferimento**
Supponiamo adesso di lavorare con tipi di dati complessi, e rifacciamoci al seguente esempio

<div align="center">
        <img src="https://telegra.ph/file/19c5a4e5495603311c14e.png" width="960" height="260"/>
</div>
Osserviamo che alla riga 1 viene definita una variabile a contenente *l'oggetto* 

```{language: "javascript"}```

come abbiamo già detto, quando definiamo la variabile a e la istanziamo ad un certo valore, in realtà stiamo creando un puntatore ad una locazione di memoria, la quale conterrà quel valore, quindi in questo abbiamo definito un puntatore ad una locazione di memoria che conterrà il dato complesso,

alla riga 2 viene dichiarata una nuova variabile b e viene inizializzata allo stesso valore di a, tuttavia poiché a è un tipo di dato complesso, in questo caso b punterà alla stessa locazione di memoria puntata da a.
Chiariamo l'esempio con la seguente figura:

<br>

<div align="center">
        <img src="https://telegra.ph/file/b86db4d877e9923480520.png" width="690" height="340"/>
</div>
<div align="center">Fonte immagine: Anthony Alicea — Udemy.com</div>

<br>

Supponendo che a punti alla locazione con indirizzo 0x001, nel momento in cui proveremo a copiare il valore di a in b, in realtà non sarà fatta nessuna copia di questo valore ma b  punterà a sua volta alla locazione 0x001, quindi da questo momento in poi le due variabili puntano alla stessa locazione di memoria, questo vuol dire che qualsiasi modifica venga fatta alla specifica locazione di memoria (nel nostro caso quella con indirizzo 0x001) allora si rifletterà su qualsiasi variabile che punta a questa locazione, 

infatti se osserviamo la riga 7, in questo caso stiamo modificando la proprietà language dell'oggetto, cambiandola da "Javascript" a "Ruby", questo vuol dire che stiamo modificando il valore memorizzato alla locazione 0x001, per tanto quando stamperemo le due variabili (riga 9 e 10), otterremo lo stesso risultato poiché entrambe puntano alla stessa locazione, ciò conferma che la modifica ha avuto effetto anche su b sebbene non abbiamo mai modificato b.



Riassumendo, quando lavoriamo con tipi di dato complesso, *la locazione di memoria è condivisa per tutte le variabili che puntano al medesimo dato*, nessuna copia di quella locazione di memoria viene fatta!

<br>

## **Conclusione**
Capire la differenza tra il passaggio per valore ed il passaggio per riferimento è molto importante, in questo articolo abbiamo parlato in maniera abbastanza semplificata di quello che accade nel momento in cui definiamo una variabile, e lo abbiamo fatto per la differenza nel trattare tipi di dati primitivi e complessi, tuttavia non è necessario ricordare in dettaglio cosa accade in memoria (anche se è sempre consigliato avere un'idea generale di cosa accade dietro le quinte), ma è sufficiente ricordare quanto segue

<br>

> Quando lavoriamo con tipi di dati primitivi allora il valore del dato è effettivamente copiato per ogni variabile che definiamo, al contrario quando lavoriamo con tipi di dati complessi il valore del dato è condiviso per ogni variabile che definiamo

<br>

Se hai ancora dei dubbi, o hai bisogno di maggiori spiegazioni unisciti a <a href="https://t.me/javascript_developers_italia">Javascript Developers Italia</a> 😊
<br>

## **Approfondimenti**
* [Javascript Developers Italia](https://t.me/javascript_developers_italia "Javascript developers italia telegram community")
* [AB TECHNOLOGIES Youtube](https://www.youtube.com/channel/UCaohnvf2lPm3z36XW0BeGpw)
* [Javascript pass by value vs by reference](https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c "Javascript pass by value vs pass by reference tutorial")
