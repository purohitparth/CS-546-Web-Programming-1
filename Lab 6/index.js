 // index.js
 const express = require('express');
 const app = express();

 app.use(express.static('../TurtleFactQuiz'));

 app.use(require('./routes'));

 app.use((req, res) => {
   res.status(404)
     .send('Unknown Request');
 });

 app.listen(3000, (req, res) => {
   console.log('App is listening on port 3000');
 });