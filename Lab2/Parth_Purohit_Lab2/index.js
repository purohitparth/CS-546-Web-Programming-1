const arrayUtils = require("./arrayUtils");
const head = require("./arrayUtils").head;
const range = require("./arrayUtils").range;
const stringUtils = require("./stringUtils");
const capitalize = require("./stringUtils").capitalize;
const objUtils = require("./objUtils");
const mapValues = require("./objUtils").mapValues;

try {
  console.log(head([1, 2, 3, 4]));
} catch (e) {
  console.error(e);
}

try {
  console.log(head(1234));
} catch (e) {
  console.error(e);
}

try {
  console.log(arrayUtils.last([9, 8, 7]));
} catch (e) {
  console.error(e);
}

try {
  console.log(arrayUtils.last(123));
} catch (e) {
  console.error(e);
}

try {
  console.log(arrayUtils.remove([9, 8, 7], 2));
} catch (e) {
  console.error(e);
}

try {
  console.log(arrayUtils.remove([1, 3], 4));
} catch (e) {
  console.error(e);
}

try {
  console.log(range(3));
  console.log(range(3, "abc"));
} catch (e) {
  console.error(e);
}

try {
  console.log(range());
} catch (e) {
  console.error(e);
}

try {
  //Should Pass
  console.log(arrayUtils.countElements([9, 10, 9, "hello world", "hello world"]));
} catch (e) {
  console.error(e);
}

try {
  //Should Pass
  console.log(arrayUtils.countElements([]));
} catch (e) {
  console.log(e);
}

try {
  console.log(arrayUtils.countElements({ 1: 2 }));
} catch (e) {
  console.error(e);
}

try {
  //Should Pass
  console.log(arrayUtils.isEqual([1, 2, 3], [1, 2, 3]));
} catch (e) {
  console.error(e);
}

try {
  //Should Fail
  console.log(arrayUtils.isEqual([1, 4, 5]));
} catch (e) {
  console.error(e);
}

try {
  console.log(capitalize("fooBar"));
  console.log(capitalize("FooBar"));
  console.log(capitalize("ABCD EFGH"));
} catch (e) {
  console.error(e);
}

try {
  console.log(capitalize(123));
} catch (e) {
  console.error(e);
}

try {
  console.log(capitalize());
} catch (e) {
  console.error(e);
}

try {
  console.log(stringUtils.repeat("abc", 4));
  console.log(stringUtils.repeat("abc", 1));
  console.log(stringUtils.repeat("abc", 0));
} catch (e) {
  console.error(e);
}

try {
  console.log(stringUtils.repeat("123", 1));
} catch (e) {
  console.error(e);
}

try {
  console.log(stringUtils.countChars("Hello, the pie is in the oven"));
  console.log(stringUtils.countChars("Tomorrow's a google challenge in the college"));
} catch (e) {
  console.error(e);
}

try {
  let a;
  console.log(stringUtils.countChars(a));
} catch (e) {
  console.error(e);
}

const first = { x: 2, y: 3 };
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

const firstSecondThird = objUtils.extend(first, second, third);
// // { x: 2, y: 3, a: 70, z: 5, q: 10 }
try {
  console.log(firstSecondThird);
} catch (e) {
  console.log(e);
}

const secondThird = objUtils.extend(second, third);
// { a: 70, x: 4, z: 5, y: 9, q: 10 } 
try {
  console.log(secondThird);
} catch (e) {
  console.log(e);
}

const thirdFirstSecond = objUtils.extend(third, first, second);
// { x: 0, y: 9, q: 10, a: 70, z: 5 }
try {
  console.log(thirdFirstSecond);
} catch (e) {
  console.log(e);
}

const firstSecondThirdSmush = objUtils.smush(first, second, third);
// { x: 0, y: 9, a: 70, z: 5, q: 10 }
try {
  console.log(firstSecondThirdSmush);
} catch (e) {
  console.log(e);
}
const secondThirdSmush = objUtils.smush(second, third);
// { a: 70, x: 0, z: 5, y: 9, q: 10 }
try {
  console.log(secondThirdSmush);
} catch (e) {
  console.log(e);
}

const thirdFirstSecondSmush = objUtils.smush(third, first, second);
// { x: 4, y: 3, q: 10, a: 70, z: 5 }
try {
  console.log(thirdFirstSecondSmush);
} catch (e) {
  console.log(e);
}


const inputFirst = { a: 1, b: 2, c: 3 };

try {
  console.log(mapValues(inputFirst, n => n ** n));
} catch (e) {
  console.log(e);
}

const inputSecond = { 1: "a", 2: "b", 3: "c" };
try {
  console.log(mapValues(inputSecond));
} catch (e) {
  console.log(e);
}