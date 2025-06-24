import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
//jb  app.js pr user pr clic kia to yaha access mila niche vala
const router = Router();

router.route("/register").post(registerUser);


export default router;