const { v4: uuidv4 } = require('uuid');

const createArray = (start, end, array, paginaAtual) => array
  .slice(start, end)
  .map((elem) => ((elem === paginaAtual) ? `**${elem}**` : elem));

const getAPI = ({ paginaAtual, quantidadePaginas }) => {
  const paginaAtualNumber = +paginaAtual;
  const array = Array.from({ length: quantidadePaginas }, (_, x) => `${x + 1}`);
  const lastNumbers = array.slice(quantidadePaginas - 3, quantidadePaginas);
  let result = [];

  if (quantidadePaginas <= 5) {
    result = array;
  } else {
    if (['1', '2', '3'].includes(paginaAtual)) {
      result = createArray(0, 5, array, paginaAtualNumber);
      result.push('...');
    } if (lastNumbers.includes(paginaAtual)) {
      result = createArray(quantidadePaginas - 5, quantidadePaginas, array, paginaAtualNumber);
      result.unshift('...');
    } else {
      result = createArray(paginaAtualNumber - 3, paginaAtualNumber + 2, array, paginaAtual);
      result.push('...');
      result.unshift('...');
    }
  }

  return [{
    id: uuidv4(),
    paginacao: result,
  }];
};

module.exports = {
  getAPI,
};
