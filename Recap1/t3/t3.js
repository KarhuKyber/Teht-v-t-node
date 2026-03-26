const s1 = Number(prompt('Anna ensimmäisen sivun pituus:'));
const s2 = Number(prompt('Anna toisen sivun pituus:'));
const s3 = Number(prompt('Anna kolmannen sivun pituus:'));

let tulos = '';

if (s1 === s2 && s2 === s3) {
  tulos = 'Kolmio on tasasivuinen (Equilateral).';
} else if (s1 === s2 || s1 === s3 || s2 === s3) {
  tulos = 'Kolmio on tasakylkinen (Isosceles).';
} else {
  tulos = 'Kolmio on epäsäännöllinen (Scalene).';
}
document.querySelector('#target').innerHTML = tulos;
