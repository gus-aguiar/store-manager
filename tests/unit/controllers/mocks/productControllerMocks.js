
const mockGetAllProducts =
  [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América"
    }
  ];

const mockGetProductById =
  {
  "id": 1,
  "name": "Martelo de Thor"
};

const allProductsResponse = { type: null, message: mockGetAllProducts };
  

module.exports = {
  mockGetAllProducts,
  mockGetProductById,
  allProductsResponse,
};
