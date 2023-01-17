const mongoose = require("mongoose");
const Product = require("./models/product");

let products;

mongoose
  .connect(
    "mongodb+srv://damilola:blessing28@cluster0.wc7pl.mongodb.net/products_test?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err.message));

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const createdProduct = new Product({
    name,
    price,
  });
  const result = await createdProduct.save();
  res.json(result);
};

const getProducts = async (req, res, next) => {
    products =  await Product.find().exec();
    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
