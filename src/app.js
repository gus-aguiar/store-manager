const express = require('express');
const productController = require('./controllers/productController');
const salesController = require('./controllers/salesController');
const insertSaleValidation = require('./middlewares/insertSaleValidation');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productController.getAll);

app.get('/products/:id', productController.getById);

app.post('/products', productController.insert);

app.put('/products/:id', productController.updateById);

app.delete('/products/:id', productController.deleteById);

app.get('/sales', salesController.getAllSales);

app.get('/sales/:id', salesController.getSaleById);

app.delete('/sales/:id', salesController.deleteById);

app.post('/sales', insertSaleValidation, salesController.updateById);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
