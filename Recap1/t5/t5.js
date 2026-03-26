const n = Number(prompt('Anna positiivinen luku:'));

let summa = 0;
if (n > 0) {
  for (let i = 1; i <= n; i++) {
    summa = summa + i;
  }
  document.querySelector('#target').innerHTML =
    `Lukujen summa välillä 1...${n} on: ${summa}`;
} else {
  document.querySelector('#target').innerHTML = 'Anna  luku!';
}
