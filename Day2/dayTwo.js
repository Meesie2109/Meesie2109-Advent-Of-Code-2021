const fs = require("fs");

const lines = fs
  .readFileSync("dataDayTwo.txt", { encoding: "utf-8" })
  .split("\n");

const splitInputs = (values) => {
  const splitValues = values.split(" ");

  const valuesObj = {
    command: splitValues[0],
    movement: +splitValues[1],
  };

  return valuesObj;
};

const switchStatmentSubmarine = (array) => {
  let xPos = 0;
  let yPos = 0;

  for (let index = 0; index < array.length; index++) {
    const splitArray = splitInputs(array[index]);

    switch (splitArray.command) {
      case "down":
        yPos += splitArray.movement;
        break;
      case "forward":
        xPos += splitArray.movement;
        break;
      case "up":
        yPos -= splitArray.movement;
        break;
    }
  }

  return xPos * yPos;
};

console.log(switchStatmentSubmarine(lines));

const switchStatmentSubmarinePlusAim = (array) => {
  let xPos = 0;
  let yPos = 0;
  let aim = 0;

  for (let index = 0; index < array.length; index++) {
    const splitArray = splitInputs(array[index]);

    switch (splitArray.command) {
      case "down":
        aim += splitArray.movement;
        break;
      case "forward":
        xPos += splitArray.movement;
        yPos += aim * splitArray.movement;
        break;
      case "up":
        aim -= splitArray.movement;
        break;
    }
  }

  return xPos * yPos;
};

console.log(switchStatmentSubmarinePlusAim(lines));
