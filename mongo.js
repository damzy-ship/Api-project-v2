const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://damilola:blessing28@cluster0.wc7pl.mongodb.net/products_test?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const newProduct = {
    name,
    price,
  };
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: error.message });
  }

  client.close();
  res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
