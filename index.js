require("dotenv").config();
const express = require("express");
const app = express();
const initializeDbConnection = require("./db/intializeDbConnection");
const productRouter = require("./routes/product.routes");
const { logger } = require("./middlewares/logger");
const PORT = process.env.PORT;
initializeDbConnection();

app.use(logger);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.json("hello");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
