/* eslint-disable @typescript-eslint/no-require-imports */
import path from "path";
const { createStream } = require("rotating-file-stream");

import APP_CONFIG from "../config";

const rotationStream = createStream("app.log", {
  compress: "gzip", // Compress rotated files
  interval: "1d", // Rotate daily
  path: path.join(__dirname, APP_CONFIG.LOG_PATH),
  size: "10M", // Rotate every 10 MegaBytes written
});

export default rotationStream;
