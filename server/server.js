const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const server = express();
dotenv.config();

server.use(cors());
server.use(morgan('dev'));
server.use(bodyParser.json({ limit: "10mb" }));

const port = process.env.SERVER_PORT;
server.listen(port, () => {
    console.log(`server start at port ${port}`);
})