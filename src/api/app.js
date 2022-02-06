const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

const PaginacaoRouter = require('../routes/PaginacaoRouter');
const erroMiddleware = require('../middlewares/error');

app.use(bodyParser.json());
app.use(cors());

app.use('/paginacao', PaginacaoRouter);
app.use(erroMiddleware);

app.listen(PORT, () => console.log(`Server ligado na porta ${PORT}`));
