import { Router } from "express";
import userController from "../controllers/userRegistrationController";

const routes = Router();

routes.post("/users", userController.create);
routes.post("/session", userController.login);

export default routes;
