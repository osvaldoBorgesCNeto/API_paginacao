const { v4: uuidv4 } = require('uuid');
const createArray = require('../middlewares/createArray');

const getAPI = ({ paginaAtual, quantidadePaginas }) => {
  const paginaAtualNumber = +paginaAtual;
  const array = Array.from({ length: quantidadePaginas }, (_, x) => `${x + 1}`);
  const lastNumbers = array.slice(quantidadePaginas - 3, quantidadePaginas);
  let result = [];

  if (quantidadePaginas <= 5) {
    result = createArray(0, quantidadePaginas, array, paginaAtual);
  } else if (['1', '2', '3'].includes(paginaAtual)) {
    result = createArray(0, 5, array, paginaAtual);
    result.push('...');
  } else if (lastNumbers.includes(paginaAtual)) {
    result = createArray(quantidadePaginas - 5, quantidadePaginas, array, paginaAtual);
    result.unshift('...');
  } else {
    result = createArray(paginaAtualNumber - 3, paginaAtualNumber + 2, array, paginaAtual);
    result.push('...');
    result.unshift('...');
  }
  let resultString = '[';
  result.forEach((elem) => {
    if (elem === result[result.length - 1]) {
      resultString = `${resultString}'${elem}']`;
    } else {
      resultString = `${resultString}'${elem}', `;
    }
  });

  return [{
    id: uuidv4(),
    paginacao: resultString,
  }];
};

module.exports = {
  getAPI,
};
