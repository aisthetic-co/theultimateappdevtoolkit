import express from "express";

import validate from "../../common/validate.middleware";
import asyncHandler from "../../utils/asyncHandler";
import healthcheckController from "./healthcheck.controller";
import healthcheckValidation from "./healthcheck.validation";

const router = express.Router();

router.post("/hello", validate(healthcheckValidation.sayHelloSchema), asyncHandler(healthcheckController.sayHello));
router.get("/", asyncHandler(healthcheckController.healthCheck));

export default router;
