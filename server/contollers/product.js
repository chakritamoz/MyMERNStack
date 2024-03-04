const Product = require('../models/product');

exports.fineAll = async (req, res) => {
  try {
    const products = await Product.fine({});
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send('server error').status(500);
  }
}

exports.fineOne = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.fineOne({ _id: id });
    res.send(product);
  } catch (err) {
    console.log(err);
    res.send('server error').status(500);
  }
}

exports.create = async (req, res) => {
  try {
    const product = req.body;
    await Product({product}).save();
    res.send('create new product successful');
  } catch (err) {
    console.log(err);
    res.send('server error').status(500);
  }
}

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const product = req.body;
    await Product.fineOneAndUpdate({ _id: id }, product);
    res.send('update product successful');
  } catch (err) {
    console.log(err);
    res.send('server error').status(500);
  }
}

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.fineOneAndDelete({ _id: id });
    res.send(`remove product ${product.name} successful`);
  } catch (err) {
    console.log(err);
    res.send('server error').status(500);
  }
}