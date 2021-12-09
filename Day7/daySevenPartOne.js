const fs = require("fs");

const numbers = fs
  .readFileSync("dataDaySeven.txt", { encoding: "utf-8" })
  .split(",")
  .map((number) => +number)
  .sort((a, b) => a - b);

const position = () => {
  let minimumFuelCost = Infinity;
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    const fuelCost = numbers.reduce((total, position) => {
      return total + Math.abs(i - position);
    }, 0);

    if (fuelCost < minimumFuelCost) {
      minimumFuelCost = fuelCost;
    }
  }

  return minimumFuelCost;
};

console.log(position());
