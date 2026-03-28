const elokuvat = [];
const maara = Number(prompt('Kuinka monta elokuvaa haluat arvostella?'));
for (let i = 0; i < maara; i++) {
  const nimi = prompt(`Anna elokuvan ${i + 1} nimi:`);
  const arvosana = Number(prompt(`Anna elokuvan ${nimi} arvosana (1-5):`));
  const elokuvaOlio = {
    title: nimi,
    rating: arvosana,
  };
  elokuvat.push(elokuvaOlio);
}

elokuvat.sort((a, b) => b.rating - a.rating);

const parasElokuva = elokuvat[0];
const kohde = document.querySelector('#target');

let html = '<h3>Kaikki elokuvat (lajiteltu arvosanan mukaan):</h3><ul>';
for (const leffa of elokuvat) {
  html += `<li>${leffa.title} - Arvosana: ${leffa.rating}/5</li>`;
}
html += '</ul>';

if (parasElokuva) {
  html += `<p class="best">Paras elokuva: ${parasElokuva.title} (Rating: ${parasElokuva.rating}/5)</p>`;
}

kohde.innerHTML = html;
