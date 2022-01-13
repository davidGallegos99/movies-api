const express = require('express');
const router = express.Router();

const api = require('../controllers/api.controller.js');
router.get('/lastMovies',api.highlights);
router.get('/getByName/:name', api.searchByName)
router.get('/getLinks/:id/:name', api.getLinks)

module.exports = router;