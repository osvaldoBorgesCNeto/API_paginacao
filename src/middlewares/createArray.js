const createArray = (start, end, array, paginaAtual) => array
  .slice(start, end)
  .map((elem) => ((elem === paginaAtual) ? `**${elem}**` : elem));

module.exports = createArray;
