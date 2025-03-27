import express, { Router } from "express";

import homeRoute from "./home.route";

const router: Router = express.Router();
interface DefaultRoutes {
  path: string;
  route: Router;
}
const defaultRoutes: DefaultRoutes[] = [
  {
    path: "/",
    route: homeRoute,
  },
];

defaultRoutes.forEach((route: DefaultRoutes) => {
  router.use(route.path, route.route);
});

export default router;
