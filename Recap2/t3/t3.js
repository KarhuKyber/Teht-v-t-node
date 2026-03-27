const numerot = [];
let numero = '';

while (true) {
  numero = prompt('Syötä numero tai stop):');

  if (numero.toLowerCase() === 'stop') {
    break;
  }
  const luku = Number(numero);
  if (!isNaN(luku)) {
    numerot.push(luku);
  }
}

const parilliset = [];

for (const luku of numerot) {
  if (luku % 2 === 0) {
    parilliset.push(luku);
  }
}

const kohde = document.querySelector('#target');

if (parilliset.length > 0) {
  kohde.innerHTML = `<p>Parilliset luvut: ${parilliset.join(', ')}</p>`;
} else {
  kohde.innerHTML = `<p>Parilliset luvut: None</p>`;
}

kohde.innerHTML += '<p><strong>Siinä olis.</strong></p>';
