const fs = require("fs");
const path = require("path");
const { format } = require("date-fns");
const { v4: uuidv4 } = require("uuid");
const fsPromises = require("fs").promises;

const logEvents = async (msg, fileName) => {
  const logTime = format(new Date(), "dd/MM/yyyy\tHH:mm:ss");
  const logEntry = `${logTime}\t${uuidv4()}\t${msg}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "log"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "log"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "log", fileName),
      logEntry
    );
  } catch (error) {
    console.log(error);
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "logs.txt");
  next();
};

module.exports = { logEvents, logger };
