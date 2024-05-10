// CONSEGNA ESERCIZIO
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// i = 1 è il contatore. quello dopo (i<=100) è la condizione del contatore, che può essere vera o falsa. 
// se è vera la condizione esegue il ciclo.
// i++ è "di quanto aumenta il contatore" e il ciclo si interrompe quando la condizione dettata termina.
let Fizz = '';
let Buzz = '';
let FizzBuzz = '';

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
    console.log(i, );
    } else if (i % 5 == 0) {
        console.log(i);
    }
    
}

