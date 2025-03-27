import express, { Router } from "express";

import homeController from "../controllers/home.controller";
import asyncHandler from "../helper/asyncHandler";

const router: Router = express.Router();

router.get("/", homeController.sayHello);

router.get("/health", asyncHandler(homeController.healthCheck));

export default router;
