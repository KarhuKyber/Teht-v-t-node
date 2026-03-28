function sortArray(numbers) {
  return [...numbers].sort((a, b) => a - b);
}

const alkuperainen = [15, 3, 22, 8, 1];
const lajiteltu = sortArray(alkuperainen);

console.log('Alkuperäinen taulukko:', alkuperainen);
console.log('Lajiteltu taulukko (nouseva):', lajiteltu);
