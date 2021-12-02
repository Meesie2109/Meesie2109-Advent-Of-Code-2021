const fs = require("fs");

const getIncreasedValues = (span) => {
  let pv = [];
  return fs
    .readFileSync("dataDayOne.txt", { encoding: "utf-8" })
    .split("\n")
    .map((x) => parseInt(x))
    .filter((value, index) => {
      pv.push(value);
      return index < span ? false : pv[index - span] < value;
    }).length;
};

//Case 1
console.log(getIncreasedValues(1));

//Case 2
console.log(getIncreasedValues(3));
