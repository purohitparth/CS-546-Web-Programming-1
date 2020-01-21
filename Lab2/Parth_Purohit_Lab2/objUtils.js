function extend(...args) {
  if (args.length < 2)
    throw "Enter at least 2 arguments";

  if (typeof args !== 'object')
    throw "Enter a object";
  let extendedMapping = {};
  for (let i = 0; i < args.length; i++) {
    for (let property in args[i]) {
      if (!extendedMapping.hasOwnProperty(property)) {
        extendedMapping[property] = args[i][property];
      }
    }
  }
  return extendedMapping;
}

function smush(...args) {
  if (args.length < 2)
    throw "Enter at least 2 arguments";

  if (typeof args !== 'object')
    throw "Enter a object";

  let smushedMapping = {};
  for (let i = args.length; i > 0; i--) {
    Object.assign(smushedMapping, args.shift());
  }
  return smushedMapping;
}

function mapValues(inputObj, inputFunc) {
  if (inputObj === undefined || inputFunc === undefined) throw "Please enter an object and a function";
  for (key in inputObj) {
    inputObj[key] = inputFunc(inputObj[key]);
  }
  return inputObj;
}

module.exports = {
  extend,
  smush,
  mapValues
}