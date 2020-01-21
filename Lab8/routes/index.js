const detailsRoute = require("./details.js");
const searchRoute = require("./search.js");

const constructorMethod = app => {
  app.use("/", searchRoute);
  app.use("/details", detailsRoute);
  app.use("/search", searchRoute);
  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;

