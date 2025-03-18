require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const morgan = require('morgan');


const {WHITELIST_URLS,PORT} = require("./app/config")
const logger = require("./app/helpers/logger/index")
const requestInfo = require("./app/middlewares/requestInfo");
const connect = require("./app/db/config")
const router = require("./app/routes/index")
const app = express();



//CORS config
const corsOptions = {
    origin: WHITELIST_URLS,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
    optionsSuccessStatus: 200
};
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(requestInfo);

//connect to mongoDb
connect()
const errorHandler = (error, request, response) => {
    // Error handling middleware functionality
    logger.error(`error in global middleware - ${JSON.stringify(error.message)}`);
    const status = error.status || 500;
    // send back an easily understandable error message to the caller
    response.status(status).send(error.message);
};

// routes
app.use(router)
//error handler middleware
app.use(errorHandler);

//convert console.log to logger
console.log = (...args) => {
    const formatArg = (arg) => {
      if (arg instanceof Error) {
        return `${arg.message}\n${arg.stack}`;
      }
      if (Array.isArray(arg)) {
        return `[${arg.join(', ')}]`; // Custom format for arrays
      }
      if (typeof arg === 'object') {
        try {
          return JSON.stringify(arg, null, 2); // Pretty-print objects
        } catch {
          return '[Circular]';
        }
      }
      return arg;
    };
  
    const formattedLog = args.map(formatArg).join(' '); // Join for readability
    logger.info(formattedLog);
};





app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}.`);
});

