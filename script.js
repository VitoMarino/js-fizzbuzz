// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi "Fizz" al posto del numero e
// per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

// 1. Devo creare un ciclo che mi permetta di avere i numeri da 1 a 100
// 2. In questo ciclo, devo far si che i numeri multipli di 3 stampino al posto del numero che dovrebbe uscire, la stringa "Fizz"
// 3. In questo stesso ciclo, devo far si che i numeri multipli di 5 stampino al posto del numero che dovrebbe usire, la stringa "Buzz"
// 4. Nell'ultima parte di questo ciclo, devo far si che i numeri, multipli sia di 3 che di 5, stampino, al posto dei numeri, la stringa "FizzBuzz"

// 1. PER OGNI numero compreso tra 1 e 100
   // 1.1 SE il numero è multiplo di 3 allora stampo la stringa "Fizz"
   // 1.2 ALTRIMENTI SE il numero è multiplo di 5 allora stampo la stringa "Buzz"
   // 1.3 ALTRIMENTI SE il numero non è multiplo di e contemporaneamente non è multiplo di 3 stampo il numero
   // 1.4 ALTRIMENTI il numero che è SIA multiplo di 3 che di 5, mi da FIZZBUZ

let Fizz = 'Fizz';
let Buzz = 'Buzz';
let FizzBuzz = 'FizzBuzz';

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(Fizz);
    } else if (i % 5 === 0) {
        console.log(Buzz);
    } else if (i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
    } else { (i % 3 === 0 && i % 5 === 0)
        console.log(FizzBuzz);
    }
}
