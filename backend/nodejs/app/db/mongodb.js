const mongoose = require("mongoose");
const logger = require("../helpers/logger/index")
const DB_URL = process.env.MONGODB_URI
const connectToMongoDb = async () => {
    try {
      await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      logger.info("MongoDB Connected!")
    } catch (error) {
      logger.error(`MongoDB connection failed:, ${error}`)
      process.exit(1);
    }
};


module.exports = connectToMongoDb