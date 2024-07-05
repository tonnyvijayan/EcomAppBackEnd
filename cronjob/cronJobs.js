const axios = require("axios");
const cron = require("node-cron");

const cronJob = cron.schedule("*/13 * * * *", async () => {
  console.log("cron called");
  try {
    const response = await axios.get("http://localhost:3055/serveractivate");
    console.log(response.data);
  } catch (error) {
    console.log("error");
  }
});

module.exports = cronJob;
