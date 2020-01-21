const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;

router.get('/', async (req, res) => {
  try {
    res.render('display/form', { title: "People Finder" });
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/search', async (req, res) => {
  let personInfo = req.body;
  let newPerson;
  console.log(personInfo);
  try {
    if (!personInfo || personInfo.name == '') {
      // res.status(400).json({ error:  });
      throw 'You must provide a search field';
      return;
    }
    newPerson = await peopleData.getPersonByName(personInfo.name);
    res.render('display/search', { result: newPerson, searchParam: personInfo, title: "People Found" });
  } catch (e) {
    res.render('display/error', { error: e });
  }
});

module.exports = router;