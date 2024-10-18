const axios = require("axios");
const cron = require("node-cron");

const cronJob = cron.schedule("*/20 * * * *", async () => {
  console.log("cron called");
  try {
    const response = await axios.get(
      "https://ecomappbackend.onrender.com/serveractivate"
    );
    console.log(response.data);
  } catch (error) {
    console.log("error");
  }
});

module.exports = cronJob;
