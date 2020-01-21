const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;

router.get('/:id', async (req, res) => {
  try {
    let person = await peopleData.getPersonById(req.params.id);
    res.render('display/details', { person: person, title: "Person Found" });
  } catch (e) {
    res.status(404).json({ error: 'person not found' });
  }
});

module.exports = router;