const axios = require('axios');

const getSpecificBreed = (req, res) =>
  axios
    .get(`https://dog.ceo/api/breed/${req.params.breed}/images`)
    .then(response => res.send(response.data.message));

const getBreeds = (_, res) => {
  axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then(response => res.send(response.data.message));
};

module.exports = { getSpecificBreed, getBreeds };
