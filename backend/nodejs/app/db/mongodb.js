const mongoose = require("mongoose");
const logger = require("../helpers/logger/index")
const {ENVIRONMENT} = require("../config")
const DB_URL = ENVIRONMENT === "development" ? 
"mongodb+srv://unsaid:test123@cluster0.duhrl.mongodb.net/unsaid_prod?retryWrites=true&w=majority" 
: 
"mongodb+srv://unsaid:test123@cluster0.duhrl.mongodb.net/unsaid_prod?retryWrites=true&w=majority"
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