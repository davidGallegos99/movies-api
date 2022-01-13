const express = require('express')
const router = express.Router();

const api = require('../routes/api.routes.js')
router.use('/', api);

module.exports = router;