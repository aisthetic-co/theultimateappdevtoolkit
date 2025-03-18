const mongoose = require("mongoose");
const logger = require("../helpers/logger/index")
const {DB_URL} = require("../constants/env.const")


const connectToMongoDb = async () => {
    try {
      await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      logger.info("MongoDB Connected!")
    } catch (error) {
       console.log(error)
      logger.error(`"MongoDB connection failed:", error`)
      process.exit(1);
    }
  };


module.exports = connectToMongoDb