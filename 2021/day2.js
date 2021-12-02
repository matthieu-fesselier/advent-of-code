const fs = require('fs');

let position = 0;
let depth = 0;
let aim = 0;

const getPosition = (input) => {
  for (const i of input) {
    const [action, value] = i.split(' ');
    switch (action) {
      case "forward":
        position += parseInt(value);
        depth += aim * parseInt(value);
        break;
      case "up":
        aim -= parseInt(value);
        break;
      case "down":
        aim += parseInt(value);
        break;
      default:
        break;
    }
  }
}

fs.readFile('./day2_input', 'utf-8', (err,data) => {
  getPosition(data.split(/\r?\n/));
  console.log("Answer: ", position * depth);
});