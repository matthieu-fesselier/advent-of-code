const fs = require('fs');

let gammaRate =  '';
let epsilonRate =  '';
let oxygenRating = '';
let co2Rating = '';

const getRates = (input) => {
  const counts1 = new Array(input[0].split("").length).fill(0);
  for (const binary of input) {
    for (const [index, bit] of binary.split('').entries()) {
      counts1[index] += bit === '1' ? 1 : 0;
    }
  }
  
  for(const count of counts1) {
    gammaRate += count > input.length / 2 ? '1' : '0';
    epsilonRate += count > input.length / 2 ? '0' : '1';
  }
  gammaRate = parseInt(gammaRate, 2);
  epsilonRate = parseInt(epsilonRate, 2);
}

const getLifeSupportRating = (input) => {
  const binaryLength = input[0].split("").length;
  let filteredInputsOxygen = input;
  let filteredInputsCo2 = input;
  for (let char = 0; char < binaryLength; char++) {
    let count1 = 0;
    let count0 = 0;

    for (let bin = 0; bin < filteredInputsOxygen.length; bin++) {
      count1 += filteredInputsOxygen[bin].charAt(char) === '1' ?  1 : 0;
    }
    for (let bin = 0; bin < filteredInputsCo2.length; bin++) {
      count0 += filteredInputsCo2[bin].charAt(char) === '0' ?  1 : 0;
    }

    filteredInputsOxygen = filteredInputsOxygen.filter(i => i.charAt(char) === (count1 >= filteredInputsOxygen.length / 2 ? '1' : '0'));
    filteredInputsCo2 = filteredInputsCo2.filter(i => i.charAt(char) === (count0 <= filteredInputsCo2.length / 2 ? '0' : '1'));
    count1 = 0;
    count0 = 0;
    if (filteredInputsOxygen.length == 1) oxygenRating = filteredInputsOxygen[0]
    if (filteredInputsCo2.length == 1) co2Rating = filteredInputsCo2[0]
    if (oxygenRating && co2Rating) break;
  }
  oxygenRating = parseInt(oxygenRating, 2);
  co2Rating = parseInt(co2Rating, 2);
}

fs.readFile('./day3_input', 'utf-8', (err,data) => {
  const input = data.split(/\r?\n/); 
  getRates(input);
  console.log("Answer 1: ", gammaRate * epsilonRate);
  getLifeSupportRating(input);
  console.log("Answer 2: ", oxygenRating * co2Rating);
});