const fs = require("fs");
const lines = fs
  .readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

let number = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i] > lines[i - 1]) number++;
}
console.log(number);

let Second = 0;
for (let i = 0; i < lines.length; i++) {
  let firstpart = lines[i] + lines[i + 1] + lines[i + 2];
  let secondpart = lines[i - 1] + lines[i] + lines[i + 1];

  if (firstpart > secondpart) Second++;
}
console.log(Second);
