const express = require("express");
require("dotenv").config();

const db = require("./db");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());

db.sequelize.sync({ force: true }).then((result) => {
  server.listen(process.env.PORT || 3002, () => {
    console.log("server is running on port ", process.env.PORT || 3002);
  });
});
