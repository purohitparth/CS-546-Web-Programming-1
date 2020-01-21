const axios = require('axios');

async function getPeople() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data // this will be the array of people
}

function checkValue(num) {
  if (num < 0) throw "The input cannot be negative \nPlease enter a positive value";
  else if (num === undefined) throw "The input cannot be empty \nPlease enter a positive number";
  else if (typeof num !== 'number') throw "The input should be a numeric value";
}

async function getPersonById(Id) {
  checkValue(Id);
  const data = await getPeople();
  if (Id > data.length) throw "No such ID exists";
  for (d in data) {
    if (data[d].id === Id) return JSON.stringify(data[d].firstName + " " + data[d].lastName);
  }
}

async function lexIndex(index) {
  checkValue(index);
  const data = await getPeople();
  if (index > data.length) throw "Index ot of bounds";
  let lastNameList = [];
  for (let i = 0; i < data.length; i++) {
    const tempObject = {};
    tempObject["id"] = data[i].id;
    tempObject["lastName"] = data[i].lastName;
    lastNameList.push(tempObject);
  }
  return getPersonById((lastNameList.sort((first, second) => (first.lastName > second.lastName) ? 1 : -1)[index]).id);
}

function countVowels(text) {
  // Implement question 3 here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  vowels.forEach(function (item) {
    for (i = 0; i < text.length; i++) {
      if (text[i].toLowerCase() == item) {
        count += 1;
      }
    }
  });
  return count;
}

async function firstNameMetrics() {
  const data = await getPeople();
  let fNameString = "";
  let shortestName = data[0].firstName;
  let longestName = "";
  // let vowels = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].firstName.length > longestName.length) longestName = data[i].firstName;
    else if (data[i].firstName.length < shortestName.length) shortestName = data[i].firstName;
    fNameString += data[i].firstName;
  }
  let vowels = countVowels(fNameString);

  let output = {
    "totalLetters": fNameString.length,
    "totalVowels": vowels,
    "totalConsonents": fNameString.length - vowels,
    "longestName": longestName,
    "shortestName": shortestName
  };
  return output;
}

module.exports = {
  getPersonById,
  lexIndex,
  firstNameMetrics
}