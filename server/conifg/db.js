const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const username = process.env.DB_USERNAME;
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;
const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('database is connected');
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;