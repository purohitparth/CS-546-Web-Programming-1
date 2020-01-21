function isArr(inputArr) {
  if (Array.isArray(inputArr) !== true) {
    throw "Input should be an array";
  }
}
function isEmpty(inputArr) {
  if (inputArr.length == 0 || typeof inputArr === undefined) {
    throw "Array cannot be empty";
  }
}

function head(inputArr) {
  isArr(inputArr);
  isEmpty(inputArr);
  return inputArr[0];
}

function last(inputArr) {
  isArr(inputArr);
  isEmpty(inputArr);
  return inputArr[inputArr.length - 1];
}

function remove(inputArr, index) {
  isArr(inputArr);
  isEmpty(inputArr);
  if (inputArr.length < index) {
    throw "Index should be less than array length";
  }
  inputArr.splice(index, 1);
  return inputArr;
}

function range(end, value) {
  let arr = [];
  if (end < 0) throw "The end argument should not be less than 0";
  else if (typeof end !== "number") throw "The end argument should be number";
  if (value !== undefined) {
    for (let i = 0; i < end; i++) arr[i] = value;
  }
  else {
    for (let i = 0; i < end; i++) arr[i] = i;
  }

  return arr;
}

function countElements(inputArr) {
  isArr(inputArr);
  let pairs = {}
  inputArr.forEach(function (element) {
    element = element.toString();
    if (element in pairs) {
      pairs[element] += 1;
    }
    else {
      pairs[element] = 1;
    }
  });
  return pairs;
}

function isEqual(inputArrOne, inputArrTwo) {
  if (inputArrOne === undefined || inputArrTwo === undefined) throw "Input requires two arrays";
  isArr(inputArrOne);
  isArr(inputArrTwo);
  if (inputArrOne.length !== inputArrTwo.length) return false;
  for (let i = 0; i < inputArrOne.length; i++) {
    if (inputArrOne[i] !== inputArrTwo[i]) return false;
  }
  return true;
}

module.exports = {
  head,
  last,
  remove,
  range,
  countElements,
  isEqual
};
