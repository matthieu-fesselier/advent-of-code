const fs = require('fs');

const getLargerMeasurements = input => (
 input.reduce((acc, _val, index, arr) => (
    acc + (arr[index - 1] < arr[index] ? 1 : 0)
  ), 0)
)

const getLargerMeasurementsPartTwo = (input) => {
  const slidingInput = input.map((val, index) => {
    if (index + 1 > input.length) return 0;
    return val + input[index + 1] + input[index + 2];
  });
  return getLargerMeasurements(slidingInput);
}

fs.readFile('./day1_input', 'utf-8', (err, data) => {
  const input = data.split(/\n/).map(i => parseInt(i));
  console.log("Answer 1:", getLargerMeasurements(input));
  console.log("Answer 2:", getLargerMeasurementsPartTwo(input));
})