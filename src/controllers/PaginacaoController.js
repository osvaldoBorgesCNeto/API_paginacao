const PaginacaoService = require('../services/PaginacaoService');

const getAPI = (req, res) => {
  const { query } = req;

  const result = PaginacaoService.getAPI(query);

  return res.status(200).send(result);
};

module.exports = {
  getAPI,
};
