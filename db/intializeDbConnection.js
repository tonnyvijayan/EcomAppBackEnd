const mongoose = require("mongoose");

const dbUrl = process.env.DB_CONNECTION_URL;

const initializeDbConnection = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("connection to db successfull");
  } catch (error) {
    console.log("connection to db failed");
  }
};

module.exports = initializeDbConnection;
