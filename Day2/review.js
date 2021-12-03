const fs = require("fs");

const lines = fs
  .readFileSync("dataDayTwo.txt", { encoding: "utf-8" })
  .split("\n");

const sumMovement = (movement) => {
  return lines
    .map((line) => line.split(" "))
    .filter((ar) => ar[0] == movement)
    .map((ar) => ar[1])
    .reduce(
      (accumulator, currentValue) =>
        parseInt(accumulator) + parseInt(currentValue)
    );
};

console.log((sumMovement("down") - sumMovement("up")) * sumMovement("forward"));
