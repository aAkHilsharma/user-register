const express = require("express");
require("dotenv").config();
require("./config/dbConfig");

const app = express();

app.use(express.json());

const port = process.env.PORT | 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});