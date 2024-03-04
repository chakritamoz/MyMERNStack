const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./conifg/db');
const { readdirSync } = require('fs');

const server = express();
dotenv.config();

// Connect Database
connectDB();

server.use(cors());
server.use(morgan('dev'));
server.use(bodyParser.json({ limit: "10mb" }));

// Loop map router
readdirSync('./routes').map((file) => {
  server.use('/api', require(`./routes/${file}`));
})

const port = process.env.SERVER_PORT;
server.listen(port, () => {
  console.log(`server start at port ${port}`);
})