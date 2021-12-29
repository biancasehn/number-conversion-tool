const WORDS = require("./constants/WORDS");
const { unit, tens, hundred, splitInput } = require("./helpers/helper");

function nConversion(n) {
  const input = n.toString().split("");
  const splittedArray = splitInput(input)

  if (1100 <= n && n <= 1999) {
    return hundred(n.toString());
  } else {
    return splittedArray.reduce((accumulator, subArray, index) => {
      if (subArray.length === 1) {
        return unit(subArray) != ""
          ? `${unit(subArray)} ${WORDS.unitIndex[index]} ${accumulator}`.trimEnd()
          : accumulator;
      } else if (subArray.length === 2) {
        return tens(subArray) != ""
          ? `${tens(subArray)} ${WORDS.unitIndex[index]} ${accumulator}`.trimEnd()
          : accumulator;
      } else if (subArray.length === 3) {
        return hundred(subArray) != ""
          ? `${hundred(subArray)} ${WORDS.unitIndex[index]} ${accumulator}`.trimEnd()
          : accumulator;
      }
      return accumulator;
    }, "");
  }
}

module.exports = nConversion;
