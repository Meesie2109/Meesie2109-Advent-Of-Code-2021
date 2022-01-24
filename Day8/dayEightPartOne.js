const fs = require("fs");

const numbers = fs.readFileSync("dataDayEight.txt", { encoding: "utf-8" });

const output = (input) => {
  return input.split("\n").reduce((easyDigits, line) => {
    line
      .split("|")[1]
      .trim()
      .split(" ")
      .forEach((digit) => {
        if ([2, 3, 4, 7].some((d) => digit.length === d)) {
          easyDigits.push(digit);
        }
      });

    return easyDigits;
  }, []).length;
};
console.log(output(numbers));
