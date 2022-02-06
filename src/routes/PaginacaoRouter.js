const express = require('express');
const rescue = require('express-rescue');
const PaginacaoController = require('../controllers/PaginacaoController');

const router = express.Router();

router.get('/', rescue(PaginacaoController.getAPI));

module.exports = router;
