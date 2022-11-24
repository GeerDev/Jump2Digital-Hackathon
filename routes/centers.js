const express = require('express');
const router = express.Router();
const CenterController = require('../controllers/CenterController')

router.get('/', CenterController.getAll)
router.get('/getByUser', CenterController.getByUser)
router.post('/', CenterController.create)

module.exports = router;