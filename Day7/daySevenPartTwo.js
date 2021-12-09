const fs = require("fs");

const numbers = fs
  .readFileSync("dataDaySeven.txt", { encoding: "utf-8" })
  .split(",")
  .map((number) => +number)
  .sort((a, b) => a - b);

const fuelCostCache = new Map();

let minimumFuelCost = Infinity;

const calculateFuelCost = (distance) => {
  let cost = fuelCostCache.get(distance);

  if (!cost) {
    cost = Array.from({ length: distance + 1 }).reduce(
      (cost, _, i) => cost + i,
      0
    );

    fuelCostCache.set(distance, cost);
  }

  return cost;
};

for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
  const fuelCost = numbers.reduce((total, position) => {
    return total + calculateFuelCost(Math.abs(i - position));
  }, 0);

  if (fuelCost < minimumFuelCost) {
    minimumFuelCost = fuelCost;
  }
}

console.log(minimumFuelCost);
