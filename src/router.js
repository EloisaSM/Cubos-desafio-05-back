const express = require("express");
const {
  productsList,
  productDetails,
  registerProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/products");

const router = express();

// TODO - users endpoints

// TODO - login endpoint

// TODO - filter

// products
router.get("/products", productsList);
router.get("/products/:id", productDetails);
router.post("/products", registerProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
