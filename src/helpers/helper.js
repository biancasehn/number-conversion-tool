import WORDS from "../constants/WORDS.js"

const splitInput = (input) => {
  return input
    .reverse()
    .reduce((accumulator, digit, index) => {
      index % 3
        ? accumulator[accumulator.length - 1].push(digit)
        : accumulator.push([digit]);
      return accumulator;
    }, [])
    .map((subArray) => subArray.reverse().join(""));
}

const unit = (input) => {
  return input != 0 ? WORDS.unit[input[0]] : "";
};

const tens = (input) => {
  if (input[0] != 0) {
    if (Number(input) > 19) {
      let result = WORDS.ty[input[0]];
      return input[1] != 0
        ? `${result}-${unit(input[1])}` //25
        : result; //20
    }
    return WORDS.tn[input]; //15
  }
  return unit(input[1]);
};

const hundred = (input) => {
  if (input[0] != 0) {
    let result = "";
    Number(input) > 999
      ? (result = `${tens(input.slice(0, 2))} hundred`) //1999 - nineteen hudred and ninety-nine
      : (result = `${unit(input[0])} hundred`);

    if (!!(Number(input) % 100)) {
      return `${result} and ${tens(input.slice(-2))}`; //120, 125
    }
    return result; //100
  }
  return input[1] != 0 || input[2] != 0 ? `and ${tens(input.slice(-2))}` : "";
};

export { unit, tens, hundred, splitInput };
