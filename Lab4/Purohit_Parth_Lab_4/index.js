const animals = require('./animals');

const connection = require('./mongoConnection');

const main = async () => {
  const sasha = await animals.create('Sasha','Dog');
  console.log('Sasha the dog has been added');
  console.log(sasha);

  const lucy = await animals.create('Lucy', 'Dog');
  console.log('Lucy the Dog has been added');
  queryall= db.inventory.find( {} );
  console.log(queryall);
  

  const Duke = await animals.create('Duke', 'Walrus');
  console.log("Duke the Walrus has been created");
  console.log(Duke);

  const updatedSashaName = await animals.rename(sasha._id, 'Sashita');

  console.log("Now Sasha's name is:");
  console.log(updatedSashasName);

  await animals.remove(Lucy);
   
  queryall= db.inventory.find( {} );
  console.log(queryall);
  
  const db = await connection();
  await db.serverConfig.close();

  console.log('Done!');
};

main().catch((error) => {
  console.log(error);
});
