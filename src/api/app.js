const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

const PaginacaoRouter = require('../routes/PaginacaoRouter');
const erroMiddleware = require('../middlewares/error');

app.use(cors());

app.use('/v1/paginacao', PaginacaoRouter);
app.use(erroMiddleware);

app.listen(PORT, () => console.log(`Server ligado na porta ${PORT}`));

module.exports = app;
