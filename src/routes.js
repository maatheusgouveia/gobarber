import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => res.json(["opa"]));

export default routes;
