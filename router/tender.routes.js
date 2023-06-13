const express = require('express');
const router = express.Router();
const tenderController = require('../controller/tender.controller');
router.get('/',tenderController.findAll);
router.post('/',tenderController.create);
router.get('/:id',tenderController.findById);
router.put('/:id',tenderController.update);
router.delete('/:id',tenderController.delete);
module.exports = router