const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return products;
};

const getById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );
  return product;
};

const insert = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [product.name],
  );
  return insertId;
};

const updateById = async (productId, productName) => {
  const result = await connection.execute(
    `UPDATE StoreManager.products SET name = ? WHERE id = ?;
    `,
    [productName, productId],
  );
  console.log('model', result);
  return result;
};

module.exports = {
  getAll,
  getById,
  insert,
  updateById,
};
