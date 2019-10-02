function check2s (number, numOf2) {
  number /= 2;
  numOf2++;
  if (number % 2 === 0) {
    numOf2 = check2s(number, numOf2);
  }
  return numOf2;
}

function check5s (number, numOf5) {
  number /= 5;
  numOf5++;
  if (number % 5 === 0) {
    numOf5 = check5s(number, numOf5);
  }
  return numOf5;
}

module.exports = function zeros(expression) {
  // your solution
  let multipliers = expression.split("*");
  let numOf2 = 0;
  let numOf5 = 0;
  let numOfZeros = 0;
  for(let multiplier of multipliers) {
    if (multiplier[multiplier.length - 2] === "!") {
      let j = parseInt(multiplier.replace("!", ""));
      while (j >= 1) {
        if (j % 2 === 0) {
          numOf2 = check2s(j, numOf2);
        }
        if (j % 5 === 0) {
          numOf5 = check5s(j, numOf5);
        }
        j -= 2;
      }
    } else {
      let j = parseInt(multiplier.replace("!", ""));
      while (j >= 1) {
        if (j % 2 === 0) {
          numOf2 = check2s(j, numOf2);
        }
        if (j % 5 === 0) {
          numOf5 = check5s(j, numOf5);
        }
        j -= 1;
      }
    }
  }
  numOfZeros = (numOf2 > numOf5) ? numOf5 : numOf2;
  return numOfZeros;
}
