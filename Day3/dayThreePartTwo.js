const fs = require("fs");

const numbers = fs
  .readFileSync("dataDayThree.txt", { encoding: "utf-8" })
  .split("\n")
  .map((line) => line.trim().split(""));

const oxygenGeneratorRateBits = [];
const co2ScrubberRateBits = [];
let digit = 0;

const mostCommonValue = (array, digit) => {
  const ones = array.reduce((ones, number) => ones + +number[digit], 0);

  return ones !== array.length / 2
    ? ones > Math.floor(array.length / 2)
      ? "1"
      : "0"
    : "1";
};

const leastCommonValue = (array, digit) => {
  const ones = array.reduce((ones, number) => ones + +number[digit], 0);

  return ones !== array.length / 2
    ? ones < array.length / 2
      ? "1"
      : "0"
    : "0";
};

const parseInteger = (input) => {
  const output = parseInt(input.join(""), 2);
  return output;
};

const lifeSupport = () => {
  while (digit < numbers[0].length) {
    const oxygenGeneratorRateMask = oxygenGeneratorRateBits.join("");
    const co2ScrubberRateMask = co2ScrubberRateBits.join("");

    const NumbersFiltered = (span, value) => {
      const filteredNumbers = numbers.filter(
        (element) => element.slice(0, digit).join("") === span
      );
      const number =
        filteredNumbers.length === 1
          ? filteredNumbers[0][digit]
          : value(filteredNumbers, digit);
      return number;
    };

    oxygenGeneratorRateBits.push(
      NumbersFiltered(oxygenGeneratorRateMask, mostCommonValue)
    );
    co2ScrubberRateBits.push(
      NumbersFiltered(co2ScrubberRateMask, leastCommonValue)
    );

    digit++;
  }

  const lifeSupportRating =
    parseInteger(oxygenGeneratorRateBits) * parseInteger(co2ScrubberRateBits);

  return lifeSupportRating;
};

console.log(lifeSupport());
