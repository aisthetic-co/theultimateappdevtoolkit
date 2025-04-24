import path from "path";

import APP_CONFIG from "../config";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createStream } = require("rotating-file-stream");

const rotationStream = createStream("app.log", {
  size: "10M", // Rotate every 10 MegaBytes written
  interval: "1d", // Rotate daily
  compress: "gzip", // Compress rotated files
  path: path.join(__dirname, APP_CONFIG.LOG_PATH),
});

export default rotationStream;
