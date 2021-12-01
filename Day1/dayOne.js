const fs = require("fs");
const lines = fs
  .readFileSync("dataDayOne.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

const isNumberBiggerThamPrevious = () => {
  let number = 0;
  for (let i = 0; i < lines.length; i++) {
    let firstNumber = lines[i];
    let secondNumber = lines[i - 1];
    if (firstNumber > secondNumber) number++;
  }
  return number;
};

const threeNumbersBiggerThanPrevious = () => {
  let number = 0;
  for (let i = 0; i < lines.length; i++) {
    let firstThreeNumbers = lines[i] + lines[i + 1] + lines[i + 2];
    let secondThreeNumbers = lines[i - 1] + lines[i] + lines[i + 1];

    if (firstThreeNumbers > secondThreeNumbers) number++;
  }
  return number;
};

console.log(isNumberBiggerThamPrevious());
console.log(threeNumbersBiggerThanPrevious());
