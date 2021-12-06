const fs = require('fs');

let answer1 = [];

const getLanternfish1 = (input) => {
  answer1 = input;
  let countNew = 0;
  for (let i = 0; i < 80; i++) {
    countNew = 0;
    answer1 = answer1.map(fish => {
      if (fish === 0) {
        countNew += 1;
        return 6
      }
      return fish - 1
    });
    answer1 = [...answer1, ...(new Array(countNew).fill(8))]
  }
}


let answer2 = 0;

const getLanternfish2 = (input) => {
  let newInput = [...new Array(9)].map((v, i) => {
    return {
      fish: i,
      count: 0
    }
  })

  for (const fish of input) {
    newInput.find(f => f.fish === fish).count += 1;
  }

  let countNew = 0;
  for (let i = 0; i < 256; i++) {
    newInput.forEach((f, i) => {
      if (f.fish === 0) countNew = f.count;
      if (f.fish === 6) f.count = newInput[i + 1].count + countNew;
      else if (f.fish === 8) f.count = countNew;
      else f.count = newInput[i + 1].count;
    })
  }

  newInput.forEach((f, i) => answer2 += f.count)
}

fs.readFile('./day6_input', 'utf-8', (err,data) => {
  const input = data.split(/,/);
  getLanternfish1(input.map(i => parseInt(i)));
  console.log("Answer 1: ", answer1.length);
  getLanternfish2(input.map(i => parseInt(i)));
  console.log("Answer 2: ", answer2);
});