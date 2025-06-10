import {registerUser,
    loginuser,getmemberdetails,
} from "../controllers/user.controller.js";
import {Router} from "express";
const router= Router();

router.post("/register",registerUser);
router.post("/login",loginuser);

router.get("/memberdetails/:id",getmemberdetails)



export default router;