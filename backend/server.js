const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

const connection = mongoose.connection;
mongoose.connect(uri);

connection.once("open", () => {
  console.log("Mongodb database established successfully");
});

const picturesRouter = require("./Routes/pictures.routes");

app.use("/pictures", picturesRouter);

app.listen(port, () => {
  console.log(`server is running in PORT: ${port}`);
});
