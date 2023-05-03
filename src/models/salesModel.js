const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT * FROM StoreManager.sales_products
     AS sp JOIN StoreManager.sales AS s ON s.id = sp.sale_id`,
  );
  return sales;
};

const getSaleById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT * FROM StoreManager.sales_products AS sp
JOIN StoreManager.sales AS s ON sp.sale_id = s.id
WHERE id = ?;`,
    [id],
  );
  return sale;
};

const insertNewSaleId = async () => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.sales (date) VALUES(NOW());
    `,
  );
    return insertId;
};

const updateById = async (reqBody) => {
  const id = await insertNewSaleId();
  reqBody.map(async ({ productId, quantity }) => {
    await connection.execute(`INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity)
        VALUES(${id}, ?, ?)`,
      [productId, quantity]);
  });
  return [id, reqBody];
};

const deleteById = async (id) => {
  const result = await connection.execute(
    `DELETE FROM StoreManager.sales WHERE id = ?;
    `,
    [id],
  );
  return result;
};

module.exports = {
  getAllSales,
  getSaleById,
  deleteById,
  updateById,
};