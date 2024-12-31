function search(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) return `found at index ${i}`;
  }
  return -1;
}

let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = 4;

console.log(search(x, number));
