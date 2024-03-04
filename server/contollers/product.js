const Product = require('../models/product');

exports.findAll = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send('server error').status(500);
  }
}

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });
    res.send(product);
  } catch (err) {
    console.log(err);
    res.send('server error').status(500);
  }
}

exports.create = async (req, res) => {
  try {
    const product = req.body;
    await Product(product).save();
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
    await Product.findOneAndUpdate({ _id: id }, product);
    res.send('update product successful');
  } catch (err) {
    console.log(err);
    res.send('server error').status(500);
  }
}

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndDelete({ _id: id });
    res.send(`remove product ${product.name} successful`);
  } catch (err) {
    console.log(err);
    res.send('server error').status(500);
  }
}