let x1 = Number(prompt('Anna piste 1 x:'));
let x2 = Number(prompt('Anna piste 2 x:'));
let y1 = Number(prompt('Anna piste 1 y:'));
let y2 = Number(prompt('Anna piste 2 y:'));

let lasku = (x2 - x1) ** 2 + (y2 - y1) ** 2;

let etaisyys = Math.sqrt(lasku);

document.querySelector('#target').innerHTML =
  'Pisteiden välinen etäisyys on ' + etaisyys.toFixed(2);
