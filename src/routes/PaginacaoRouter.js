const express = require('express');
const rescue = require('express-rescue');
const PaginacaoController = require('../controllers/PaginacaoController');
const validatePaginacao = require('../middlewares/validatesPaginacao');

const router = express.Router();

router.get('/', validatePaginacao, rescue(PaginacaoController.getAPI));

module.exports = router;
