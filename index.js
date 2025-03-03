require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./cors/cors");
const initializeDbConnection = require("./db/intializeDbConnection");
const errorHandler = require("./middlewares/errorHandler");
const routeNotFound = require("./middlewares/routeNotFound");
const productRouter = require("./routes/product.routes");
const userRouter = require("./routes/user.routes");
// const { logger } = require("./middlewares/logger");
// const cronJob = require("./cronjob/cronJobs");
const PORT = process.env.PORT;
initializeDbConnection();
// cronJob.start();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(logger);
app.use("/products", productRouter);
app.use("/user", userRouter);

app.get("/serveractivate", (req, res) => {
  res.status(200).send("Server activated");
});

app.use(routeNotFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
