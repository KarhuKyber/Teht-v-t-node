// a & b: Kysytään luku ja muutetaan se tekstistä numeroksi
const maxLuku = Number(
  prompt('Syötä positiivinen kokonaisluku kertotaulua varten:')
);

// Aloitetaan taulukon rakentaminen
let taulukkoHTML = '<table>';

// d: Ulompi silmukka riveille (1 -> annettu luku)
for (let rivi = 1; rivi <= maxLuku; rivi++) {
  taulukkoHTML += '<tr>'; // Aloitetaan uusi rivi

  // e: Sisempi silmukka sarakkeille (1 -> annettu luku)
  for (let sarake = 1; sarake <= maxLuku; sarake++) {
    // f: Lasketaan tulo (rivi * sarake)
    let tulo = rivi * sarake;

    // g: Lisätään tulo taulukon soluun (td)
    taulukkoHTML += `<td>${tulo}</td>`;
  }

  taulukkoHTML += '</tr>'; // Päätetään rivi
}

taulukkoHTML += '</table>'; // Päätetään taulukko

// g: Näytetään valmis taulukko HTML-dokumentissa
document.querySelector('#target').innerHTML = taulukkoHTML;
