const fs = require('fs');

let answer1 = 0;

const getRiskSum = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      answer1 += getRisk(i, j, input) ? (1 + input[i][j]) : 0;
    }
  }
}

const getRisk = (i,j,input) => {
  const current = input[i][j];
  const left = j - 1 >= 0 ? input[i][j - 1] : 99;
  const right = j + 1 < input[i].length ? input[i][j + 1] : 99;
  const up = i - 1 >= 0 ? input[i-1][j] : 99;
  const down = i + 1 < input.length ? input[i + 1][j] : 99;
  return current < left && current < right && current < up && current < down
}


fs.readFile('./day9_input', 'utf-8', (err,data) => {
  const input = data.split(/\n/);
  getRiskSum(input.map(i => i.split('').map(i => parseInt(i))));
  console.log(answer1);
});