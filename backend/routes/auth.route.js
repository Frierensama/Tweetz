import express from "express";
import { login, logout, signup ,getMe } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js"

const Router = express.Router();


Router.get("/me",protectRoute , getMe)
Router.route("/signup").post(signup);
Router.route("/login").post(login);
Router.route("/logout").post(logout);

export default Router;

