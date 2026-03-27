const numbers = [];

for (let i = 1; i <= 5; i++) {
  const num = Number(prompt(`Anna numero ${i}/5:`));
  numbers.push(num);
}

console.log('Numbers:', numbers);

const searchNum = Number(prompt('Anna numero, jota etsitään:'));
if (numbers.includes(searchNum)) {
  console.log(`Numero ${searchNum} löytyy taulukosta.`);
} else {
  console.log(`Numeroa ${searchNum} ei löydy taulukosta.`);
}
numbers.pop();
console.log('Updated Numbers (viimeinen poistettu):', numbers);

numbers.sort((a, b) => a - b);

console.log('Sorted Numbers:', numbers);

document.querySelector('#target').innerHTML =
  `Lajiteltu lista: ${numbers.join(', ')}`;
