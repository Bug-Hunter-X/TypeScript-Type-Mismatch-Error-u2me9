function printNumber(num: number): void {
  console.log(num);
}

printNumber(123); // Correct: Passing a number

function printAnything(arg: any): void {
  console.log(arg);
}

printAnything("hello"); // Correct: Using 'any' type for flexibility