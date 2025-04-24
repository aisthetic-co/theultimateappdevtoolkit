import express from "express";

import asyncHandler from "../../utils/asyncHandler";
import healthcheckController from "./healthcheck.controller";

const router = express.Router();

router.get("/", asyncHandler(healthcheckController.sayHello));
router.get("/health", asyncHandler(healthcheckController.healthCheck));

export default router;
