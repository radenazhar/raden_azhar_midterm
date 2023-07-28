module.exports = app => {
    const Product = require("../controllers/productController");
    const r = require('express').Router();

    r.post("/videos/:videoId/products", Product.insertProduct);
    r.get("/videos/:videoId/products", Product.findAll);
    r.get("/videos/:videoId/products/:productId", Product.getProductByID);

    app.use("/products", r);
}