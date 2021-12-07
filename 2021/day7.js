const fs = require('fs');

let answer1 = null;

const getFuel1 = (input) => {
  input = input.sort((a, b) => a - b);
  const possiblePositions = input.map(
    (v, i) => input.reduce((prev, cur) => prev + Math.abs(i - cur), 0)
  );
  answer1 = possiblePositions.sort((a, b) => a - b)[0]
}

let answer2 = null;

const getFuel2 = (input) => {
  input = input.sort((a, b) => a - b);

  const possiblePositions = input.map(
    (v, i) => input.reduce((prev, cur) => {
      let diff = Math.abs(i - cur);
      let move = 0;
      for (let j = 0; j < diff; j++) {
        move += (j+1)
      }
      return prev + move
    }, 0)
  );

  answer2 = possiblePositions.sort((a, b) => a - b)[0]
}

fs.readFile('./day7_input', 'utf-8', (err,data) => {
  const input = data.split(/,/);
  getFuel1(input.map(i => parseInt(i)));
  console.log("Answer 1: ", answer1);
  getFuel2(input.map(i => parseInt(i)));
  console.log("Answer 2: ", answer2);
});