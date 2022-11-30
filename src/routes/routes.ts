import { Router } from "express";
import userController from "../controllers/userRegistrationController";
import shareStoryController from "../controllers/shareStory";
import displayStoryInfoController from "../controllers/shareStory";
import searchStoryController from "../controllers/shareStory";
const routes = Router();

routes.post("/users", userController.create);
routes.post("/session", userController.login);
routes.post("/share-story",  shareStoryController.shareStory);
routes.get("/display-story",  displayStoryInfoController.displayStory);
routes.get("/search-story/:_id",  searchStoryController.searchStory);


export default routes;
