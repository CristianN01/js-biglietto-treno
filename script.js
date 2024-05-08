
let distanza = prompt("Inserisci i Km da percorrere");

let età = prompt("Inserisci la tua età");

const prezzoBiglietto = (0.276);

const prezzo = (distanza * prezzoBiglietto);

let sconto;

if ( età < 18) {
    sconto=((prezzo / 100) * 21);

} else if(età > 65) {
    sconto=((prezzo  / 100) * 42);

} else {
    sconto=prezzo
}

const spesaPrezzo = prezzo - sconto

let spesaNetta = spesaPrezzo.toFixed(2);
console.log("Spesa", spesaNetta);



