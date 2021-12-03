const fs = require("fs");

const numbers = fs
  .readFileSync("dataDayThree.txt", { encoding: "utf-8" })
  .split("\n")
  .map((line) => line.trim().split(""));

const oxygenGeneratorRateBits = [];
const co2ScrubberRateBits = [];
let digit = 0;

const commonValue = (array, digit, i) => {
  const ones = array.reduce((ones, number) => ones + +number[digit], 0);
  if (i === 1) {
    return ones !== array.length / 2
      ? ones > Math.floor(array.length / 2)
        ? "1"
        : "0"
      : "1";
  }
  if (i === 2) {
    return ones !== array.length / 2
      ? ones < array.length / 2
        ? "1"
        : "0"
      : "0";
  }
};

const parseInteger = (input) => {
  const output = parseInt(input.join(""), 2);
  return output;
};

const lifeSupport = () => {
  while (digit < numbers[0].length) {
    const oxygenGeneratorRateMask = oxygenGeneratorRateBits.join("");
    const co2ScrubberRateMask = co2ScrubberRateBits.join("");
    const NumbersFiltered = (span, value, i) => {
      const filteredNumbers = numbers.filter(
        (element) => element.slice(0, digit).join("") === span
      );
      const number =
        filteredNumbers.length === 1
          ? filteredNumbers[0][digit]
          : value(filteredNumbers, digit, i);
      return number;
    };

    oxygenGeneratorRateBits.push(
      NumbersFiltered(oxygenGeneratorRateMask, commonValue, 1)
    );
    co2ScrubberRateBits.push(
      NumbersFiltered(co2ScrubberRateMask, commonValue, 2)
    );

    digit++;
  }
  const lifeSupportRating =
    parseInteger(oxygenGeneratorRateBits) * parseInteger(co2ScrubberRateBits);
  return lifeSupportRating;
};

console.log(lifeSupport());
