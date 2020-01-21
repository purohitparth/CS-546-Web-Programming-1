const people = require("./people");
const weather = require("./weather");
const work = require("./work");

async function main() {
  try {
    let personId = await people.getPersonById(100);
    console.log(personId)
    let lexid = await people.lexIndex(11);
    console.log(lexid);
    let nameMetrics = await people.firstNameMetrics();
    console.log(nameMetrics);
  } catch (e) {
    console.log(e);
  }

  try {
    let personId = await people.getPersonById(1000);
    console.log(personId)
  } catch (e) {
    console.log(e);
  }
  try {
    let lexid = await people.lexIndex(-11);
    console.log(lexid);
  } catch (e) {
    console.log(e);
  }

  try {
    let firstName = "Goddard";
    let lastName = "Anlay";
    let verdict = await weather.shouldTheyGoOutside(firstName, lastName);
    console.log(verdict)
    verdict = await weather.shouldTheyGoOutside("Scotty", "Barajaz") // Returns "Yes, Scotty should go outside."
    console.log(verdict)
    verdict = await weather.shouldTheyGoOutside("Calli", "Ondrasek") // Returns "No, Calli should not go outside."
    console.log(verdict)
  } catch (e) {
    console.log(e);
  }

  try {
    let firstName = "Goddard";
    let lastName = "Abc";
    verdict = await weather.shouldTheyGoOutside(firstName, lastName);
    console.log(verdict)
  } catch (e) {
    console.log(e);
  }

  try {
    verdict = await weather.shouldTheyGoOutside("");
    console.log(verdict);
  } catch (e) {
    console.log(e);
  }

  try {
    verdict = await weather.shouldTheyGoOutside(); // Returns "No, Calli should not go outside."
    console.log(verdict);
  } catch (e) {
    console.log(e);
  }

  try {
    let jobStatus = await work.whereDoTheyWork("Demetra", "Durrand");
    console.log(jobStatus);
    jobStatus = await work.whereDoTheyWork("Norry", "O'Glassane");
    console.log(jobStatus);
    let hacker = await work.findTheHacker("79.222.167.180");
    console.log(hacker);
    hacker = await work.findTheHacker("85.62.70.236");
    console.log(hacker);
  } catch (e) {
    console.log(e);
  }

  try {
    jobStatus = await work.whereDoTheyWork("Demetra");
    console.log(jobStatus);
  } catch (e) {
    console.log(e);
  }

  try {
    jobStatus = await work.whereDoTheyWork("Norry", "blah");
    console.log(jobStatus);
  } catch (e) {
    console.log(e);
  }

  try {
    jobStatus = await work.whereDoTheyWork();
    console.log(jobStatus);
  } catch (e) {
    console.log(e);
  }

  try {
    hacker = await work.findTheHacker(79);
    console.log(hacker);
  } catch (e) {
    console.log(e);
  }

}

//call main
main()