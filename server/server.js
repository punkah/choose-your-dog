const express = require("express");
const api = require("./api");
const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(`${__dirname}/client/build`));
}

app.get("/breeds/:breed", api.getSpecificBreed);
app.get("/breeds", api.getBreeds);

app.listen(port, () => console.log(`Listening on port ${port}`));
