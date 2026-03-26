const pisteet = Number(prompt('Anna kokeen pistemäärä (0-100):'));

let arvosana;

if (pisteet < 0 || pisteet > 100) {
  arvosana = 'Virheellinen pistemäärä! Anna luku väliltä 0-100.';
} else if (pisteet <= 39) {
  arvosana = 0;
} else if (pisteet <= 51) {
  arvosana = 1;
} else if (pisteet <= 63) {
  arvosana = 2;
} else if (pisteet <= 75) {
  arvosana = 3;
} else if (pisteet <= 87) {
  arvosana = 4;
} else {
  arvosana = 5;
}

const viesti =
  typeof arvosana === 'number'
    ? `Pistemäärällä ${pisteet} arvosanasi on: ${arvosana}`
    : arvosana;

document.querySelector('#target').innerHTML = viesti;
