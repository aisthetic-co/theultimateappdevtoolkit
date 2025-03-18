const {ENVIRONMENT} = require("../../constants/env.const");
const devLogger = require("./devLogger")

let logger = devLogger();

module.exports = logger;