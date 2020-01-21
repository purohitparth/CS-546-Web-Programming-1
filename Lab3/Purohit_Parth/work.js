const axios = require('axios');

async function getWorkData() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
  return data;
}
async function getPeople() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data // this will be the array of people
}

function checkInput(firstName, lastName) {
  if (firstName === undefined || lastName === undefined || typeof firstName != 'string' || typeof lastName != 'string') throw "Please Enter two string inputs";
}

async function whereDoTheyWork(firstName, lastName) {
  checkInput(firstName, lastName);
  let people = await getPeople();
  let work = await getWorkData();
  for (let i = 0; i < people.length; i++) {
    if (firstName === people[i].firstName && lastName === people[i].lastName) {
      // const ssn = people[i].ssn;
      for (let j = 0; j < work.length; j++) {
        if (work[j].ssn === people[i].ssn) {
          if (work[j].willBeFired == true) return JSON.stringify(`${firstName} ${lastName} - ${work[j].jobTitle} at ${work[j].company}. They will be fired`);
          else return JSON.stringify(`${firstName} ${lastName} - ${work[j].jobTitle} at ${work[j].company}. They will not be fired`);
        }
      }
    }
    else if (i === people.length - 1) throw "No such person exists, please check your input";
  }
}

async function findTheHacker(Ip) {
  if (Ip === undefined || typeof Ip != 'string') throw "Please Enter a valid IP";
  let people = await getPeople();
  let work = await getWorkData();
  for (let i = 0; i < work.length; i++) {
    if (Ip === work[i].ip) {
      // const ssn = work[i].ssn;
      for (let j = 0; j < people.length; j++) if (people[j].ssn === work[i].ssn) return JSON.stringify(`${people[j].firstName} ${people[j].lastName} is the hacker!`);
    }
    else if (i === work.length - 1) throw "Please enter a valid IP address";
  }
}

module.exports = {
  whereDoTheyWork,
  findTheHacker
}