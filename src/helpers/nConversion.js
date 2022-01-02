import WORDS from "../constants/WORDS.js"
import { unit, tens, hundred, splitInput } from "./helper.js";

function nConversion(inputValue) {
  const input = inputValue.toString().split("");
  const splittedArray = splitInput(input)

  if (1100 <= inputValue && inputValue <= 1999) {
    return hundred(inputValue.toString());
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
      return accumulator
    }, "");
  }
}

export default nConversion;