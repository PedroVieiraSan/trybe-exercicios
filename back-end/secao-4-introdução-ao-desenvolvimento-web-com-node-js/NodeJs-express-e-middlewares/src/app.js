const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedArt = require('./middlewares/validateCreatedArt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');

const app = express();
app.use(express.json());

app.post('/activities',
validateName,
validatePrice,
validateDescription,
validateCreatedArt,
validateRating,
validateDifficulty,
(_req, res) => {
    res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = app;