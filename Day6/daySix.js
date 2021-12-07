const fs = require("fs");

const numbers = fs.readFileSync("dataDaySix.txt", { encoding: "utf-8" });
//   .split(",");
//.reduce((list, f) => list.addLast(new Lanternfish(+f)), new LinkedList());

const fish = (maxDays = 256) => {
  const numberOfDays = maxDays + 8 + 1;
  const days = Array.from({ length: numberOfDays }).fill(0);
  const startingFish = numbers.split(",").map((timer) => +timer);

  const relativeSpawnDays = Array.from({
    length: Math.ceil(numberOfDays / 7),
  }).map((_, i) => i * 7);

  startingFish.forEach((remainingTimer) => {
    days[remainingTimer] += 1;
  });

  for (let currentDay = 0; currentDay <= numberOfDays; currentDay++) {
    const existingFish = days[currentDay];

    relativeSpawnDays.forEach((relativeSpawnDay) => {
      const spawnsOnDay = currentDay + relativeSpawnDay + 8 + 1;

      if (spawnsOnDay < numberOfDays) {
        days[spawnsOnDay] += existingFish;
      }
    });
  }

  return days.reduce((sum, fish) => sum + fish, 0);
};

console.log(fish());
