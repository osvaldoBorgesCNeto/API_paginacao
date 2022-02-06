const PaginacaoService = require('../services/PaginacaoService');

const getAPI = (req, res) => {
  const { query } = req;

  const result = PaginacaoService.getAPI(query);

  return res.status(200).json(result);
};

module.exports = {
  getAPI,
};
