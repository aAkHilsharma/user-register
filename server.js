const express = require("express");
require("dotenv").config();
require("./config/dbConfig");

const app = express();

const userRoutes = require("./routes/user");

app.use(express.json());

app.use("/user", userRoutes);

const port = process.env.PORT | 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
