import { Router } from "express";
import userController from "../controllers/userRegistrationController";
import shareStoryController from "../controllers/shareStory";
const routes = Router();

routes.post("/users", userController.create);
routes.post("/session", userController.login);
routes.post("/share-story",  shareStoryController.shareStory);

export default routes;
