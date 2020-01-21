function strExists(str) {
  if (str === undefined) throw "Please enter a string input";
  else if (typeof str !== "string") throw "Input is not a String";
}
function capitalize(inputStr) {
  strExists(inputStr);
  let newStr = inputStr[0].toUpperCase();
  newStr += inputStr.slice(1).toLowerCase();
  return JSON.stringify(newStr);
}

function repeat(inputStr, repTime) {
  strExists(inputStr);
  let outputStr = "";
  if (repTime < 0) throw "PLease enter a positive number";
  else if (repTime == 0) return JSON.stringify(outputStr);
  while (repTime > 0) {
    outputStr += inputStr;
    repTime -= 1;
  }
  return JSON.stringify(outputStr);
}

function countChars(inputStr) {
  strExists(inputStr);
  let mappings = {}
  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] in mappings) {
      mappings[inputStr[i]] += 1;
    }
    else {
      mappings[inputStr[i]] = 1;
    }
  }
  return mappings;
}

module.exports = {
  capitalize,
  repeat,
  countChars
}