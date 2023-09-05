const express = require("express");
require("dotenv").config();
require("./config/dbConfig");

const app = express();

const userRoutes = require("./routes/user");

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.use("/user", userRoutes);

const port = process.env.PORT | 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
