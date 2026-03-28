function sortArray(numbers, order) {
  const sorted = [...numbers];

  if (order === 'asc') {
    sorted.sort((a, b) => a - b);
  } else if (order === 'desc') {
    sorted.sort((a, b) => b - a);
  }
  return sorted;
}

const testiluvut = [5, 2, 8, 1, 9];

console.log('Testiluvut:', testiluvut);
console.log('Nouseva (asc):', sortArray(testiluvut, 'asc')); // [1, 2, 5, 8, 9]
console.log('Laskeva (desc):', sortArray(testiluvut, 'desc')); // [9, 8, 5, 2, 1]
