const target = document.querySelector('#target');

const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

const os = navigator.platform;

const screenW = screen.width;
const screenH = screen.height;

const availW = screen.availWidth;
const availH = screen.availHeight;

const nyt = new Date();
const pvmOptions = {day: 'numeric', month: 'long', year: 'numeric'};
const pvm = nyt.toLocaleDateString('fi-FI', pvmOptions);
const aika = nyt.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

const html = `
  <p>Selain: ${browserName}, ${browserVersion}</p>
  <p>Käyttöjärjestelmä: ${os}</p>
  <p>Näytön resoluutio: ${screenW} x ${screenH}</p>
  <p>Vapaa näyttötila: ${availW} x ${availH}</p>
  <p>Päivämäärä: ${pvm}</p>
  <p>Kello: ${aika}</p>
`;
target.innerHTML = html;
