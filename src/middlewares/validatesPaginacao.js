const validatePaginacao = (req, _res, next) => {
  const { paginaAtual, quantidadePaginas } = req.query;

  if (!paginaAtual || !quantidadePaginas) {
    return next({
      code: 422,
      message: 'Está faltando informação',
    });
  }

  if (!/^\d+$/.test(paginaAtual) || !/^\d+$/.test(quantidadePaginas)) {
    return next({
      code: 422,
      message: 'Serão aceitos apenas numeros inteiros',
    });
  }

  if (+(paginaAtual) > +(quantidadePaginas)) {
    return next({
      code: 422,
      message: "'paginaAtual' é maior que 'quantidadePaginas'",
    });
  }

  return next();
};

module.exports = validatePaginacao;
