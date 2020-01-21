
const express = require("express");
const router = express.Router();
const animalData = require("./data/animals");

router.get("/:id", async (req, res) => {
  try {
    const animal = await animalData.get(req.params.id);
    res.json(animal);
    res.sendStatus(200);
  } catch (e) {
    res.status(404).json({ message: "Animal not found!" });
  }
});

router.get("/", async (req, res) => {
  try {
    const animalList = await animalData.getAll();
    res.json(animalList);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  const animalInfo = req.body;

  if (!animalInfo) {
    res.status(400).json({ error: 'You must provide data to create an animal' });
    return;
  }

  if (!animalInfo.name) {
    res.status(400).json({ error: 'You must provide a name' });
    return;
  }

  if (!animalInfo.animalType) {
    res.status(400).json({ error: 'You must provide animal type' });
    return;
  }

  try {
    const newAnimal = await animalData.create(animalInfo.name, animalInfo.animalType);
    res.json(newAnimal);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.put("/:id", async (req, res) => {
  const animalInfo = req.body;

  if (!animalInfo) {
    res.status(400).json({ error: 'You must provide data to create an animal' });
    return;
  }

  if (!animalInfo.newName && !animalInfo.newType) {
    res.status(400).json({ error: 'You must provide a name or type or both' });
    return;
  }

  try {
    await animalData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'No animal exists' });
    return;
  }

  try {
    const updatedAnimal = await animalData.rename(req.params.id, animalInfo);
    res.json(updatedAnimal);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ error: 'You must provide an id to delete' });
    return;
  }
  try {
    await animalData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Animal not found' });
    return;
  }

  try {
    const deletedAnimal = await animalData.remove(req.params.id);
    const output = {
      deleted: true,
      data: deletedAnimal
    };
    res.json(output);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;



