import express, { Router } from "express";

import healthcheckRoute from "./modules/healthcheck/healthcheck.route";

interface Route {
  path: string;
  route: Router;
}

const router = express.Router();

const routes: Route[] = [
  {
    path: "/",
    route: healthcheckRoute,
  },
];

routes.forEach((route: Route) => {
  router.use(route.path, route.route);
});

export default router;
