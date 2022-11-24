const express = require('express');
const router = express.Router();
const DatabaseController = require('../controllers/DatabaseController')

router.get('/fillDatabaseOldData', DatabaseController.fillDatabaseOldData)
router.get('/fillDatabaseNewData', DatabaseController.fillDatabaseNewData)

module.exports = router;