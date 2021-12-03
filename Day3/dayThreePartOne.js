const fs = require("fs");

const numbers = fs
  .readFileSync("dataDayThree.txt", { encoding: "utf-8" })
  .split("\n")
  .map((line) => line.trim().split(""));

const gammaRateBits = [];
const epsilonRateBits = [];
const counters = Array.from({ length: numbers[0].length }).map(() => 0);
const parseInteger = (input) => {
  const output = parseInt(input.join(""), 2);
  return output;
};

const submarinePowerConsumtion = () => {
  for (let n = 0; n < numbers.length; n++) {
    const number = numbers[n];

    for (let i = 0; i < number.length; i++) {
      counters[i] += number[i] === "1" ? 1 : 0;
    }
  }

  for (let i = 0; i < counters.length; i++) {
    gammaRateBits.push(counters[i] > numbers.length / 2 ? "1" : "0");
    epsilonRateBits.push(counters[i] < numbers.length / 2 ? "1" : "0");
  }

  const powerConsumption =
    parseInteger(gammaRateBits) * parseInteger(epsilonRateBits);

  return powerConsumption;
};

console.log(submarinePowerConsumtion());
