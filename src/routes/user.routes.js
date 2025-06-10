import {registerUser,
    loginuser,
} from "../controllers/user.controller.js";
import {Router} from "express";
const router= Router();

router.post("/register",registerUser);
router.post("/login",loginuser);




export default router;