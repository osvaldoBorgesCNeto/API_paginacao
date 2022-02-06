const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /paginacao', () => {
  let response;

  before(async () => {
    response = await chai.request('http://localhost:8000')
      .get('/paginacao?paginaAtual=8&quantidadePaginas=10');
  });

  it('retorna o codigo de status 200', () => {
    expect(response).to.have.status(200);
  });

  it('retorna um array', () => {
    expect(response.body).to.be.a('array');
  });

  it('retorna um objeto', () => {
    expect(response.body[0]).to.be.a('object');
  });

  it('o objeto possui a propriedade "id"', () => {
    expect(response.body[0]).to.have.property('id');
  });

  it('o objeto possui a propriedade "paginacao"', () => {
    expect(response.body[0]).to.have.property('paginacao');
  });
});
