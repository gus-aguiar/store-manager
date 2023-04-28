const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT * FROM StoreManager.sales_products
     AS sp JOIN StoreManager.sales AS s ON s.id = sp.sale_id`,
  );
  return sales;
};

const getSalleById = async (id) => {
  const [[sale]] = await connection.execute(
    `SELECT * FROM StoreManager.sales_products AS sp
JOIN StoreManager.sales AS s ON sp.sale_id = s.id
WHERE id = ?;`,
    [id],
  );
  return sale;
};

module.exports = {
  getAllSales,
  getSalleById,
};