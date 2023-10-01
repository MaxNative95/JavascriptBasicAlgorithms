type Arr = Array<Array<number>>;

function largestOfFour(arr: Arr) {
  let mutatedArr:Array<number> = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    mutatedArr[i] = largestNumber;
  }
  return mutatedArr;
}

largestOfFour([
  [2, 5, 9, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
