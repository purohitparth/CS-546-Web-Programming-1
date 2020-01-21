const mongoCollections = require('./mongoCollections');
const animals = mongoCollections.animals;

module.exports = {
  // This is a fun new syntax that was brought forth in ES6, where we can define
  // methods on an object with this shorthand!
  async get(id) {
    if (!id) throw 'You must provide an id to search for';

    const animalCollection = await animals();
    const animal = await animalCollection.findOne({_id: id});
    if (animal === null) throw 'No animal with that id';

    return animal;
  },

  async getAll() {
    const animalCollection = await animals();

    const animals = await animalCollection.find({}).toArray();

    return animals;
  },

  async create(name, animalType, likes) {
    if (!name) throw 'You must provide a name for your dog';

    if (!animalType || !Array.isArray(animalType)) throw 'You must provide an array of animalType';

    if (animalType.length === 0) throw 'You must provide at least one Animal Type.';
    const animalCollection = await animals();

    let newAnimal = {
      name: name,
      animalType: animalType,
      likes: likes
    };

    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) throw 'Could not add animal';

    const newId = insertInfo.insertedId;

    const animal = await this.get(newId);
    return animal;
  },
  async remove(id) {
    if (!id) throw 'You must provide an id to search for';

    const animalCollection = await animals();
    const deletionInfo = await animalCollection.removeOne({_id: id});

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete animal with id of ${id}`;
    }
  },
  async rename(id, Newname) {
    if (!id) throw 'You must provide an id to search for';

    if (!name) throw 'You must provide a name for your dog';

   

   

    const animalCollection = await animals();
    const rename = {
      name: name,
      
    };

    const updatedInfo = await animalCollection.updateOne({_id: id}, {$set: updatedAnimal});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update dog successfully';
    }

    return await this.get(id);
  }
};
