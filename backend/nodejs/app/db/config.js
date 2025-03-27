const connectToMongoDb = require("./mongodb")
const {DB_PROVIDER} = require("../config")
let connect;

switch (DB_PROVIDER) {
  case 'mongodb':
    connect = connectToMongoDb;
    break;
  default:
    throw new Error(`Unsupported DB provider: ${DB_PROVIDER}`);
}
module.exports = connect;
