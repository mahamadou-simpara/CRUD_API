const express = require('express');
const router = express.Router();
const todoController = require('../controller/controller')

router.get('/', todoController.getTODO);

router.post('/', todoController.postTODO);

router.patch('/:id', todoController.updateTODO);

router.delete('/:id', todoController.deleteTODO);

module.exports = router;