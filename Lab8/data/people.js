
const axios = require('axios');

async function getPeople() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data // this will be the array of people
}

function checkValue(num) {
  if (num < 0) throw "The input cannot be negative \nPlease enter a positive value";
  else if (num === undefined) throw "The input cannot be empty \nPlease enter a positive number";
  // else if (typeof num !== 'number') throw "The input should be a numeric value";
}

async function getPersonById(Id) {
  checkValue(Id);
  const data = await getPeople();
  if (Id > data.length) throw "No such ID exists";
  for (d in data) {
    if (Number(data[d].id) === Number(Id)) return data[d];
  }
}

async function getPersonByName(name) {
  if (name === undefined || name === null) {
    console.log(name);
    throw "NO name provided";

  }
  const data = await getPeople();
  let people = [];
  let fullName = "";
  for (d in data) {
    fullName = `${data[d].firstName} ${data[d].lastName}`.toLowerCase();
    if (fullName.includes(name.toLowerCase())) {
      people.push(data[d]);
    }
  }
  return people;
}

module.exports = {
  getPersonById,
  getPersonByName
}