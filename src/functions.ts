function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

console.log(addAndHandle(10, 20, printResult));

printResult(add(5, 12)); // Result: 17

let combineValues: Function;
combineValues = add;
combineValues = printResult;
console.log(combineValues(5, 8));
//  problem in above syntax is that you can assign any funciton to combineValues variable

let newCombineValues: (a: number, b: number) => number;
newCombineValues = add;
// newCombineValues = printResult; // Error
