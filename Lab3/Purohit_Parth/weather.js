const axios = require('axios');

async function getWeatherData() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json');
  return data;
}
async function getPeople() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data // this will be the array of people
}

function checkInput(firstName, lastName) {
  if (firstName === undefined || typeof firstName !== 'string' || lastName === undefined || typeof lastName !== 'string') throw "Please Enter two string inputs";
}

async function shouldTheyGoOutside(firstName, lastName) {
  checkInput(firstName, lastName);
  let people = await getPeople();
  let weather = await getWeatherData();
  for (let i = 0; i < people.length; i++) {
    if (firstName === people[i].firstName && lastName === people[i].lastName) {
      const zip = people[i].zip;
      for (i = 0; i < weather.length; i++) {
        if (weather[i].zip === zip) {
          if (weather[i].temp >= 35) return JSON.stringify(`Yes, ${firstName} should go outside.`);
          else return `No, ${firstName} should not go outside.`;
        }
      }
    }
    else if (i === people.length - 1) throw "No such person exists";
  }
}

module.exports = {
  shouldTheyGoOutside
}