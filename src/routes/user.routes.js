import {registerUser,
    loginuser,getmemberdetails,
    getAllusers,
} from "../controllers/user.controller.js";
import {Router} from "express";
const router= Router();

router.post("/register",registerUser);
router.post("/login",loginuser);

router.get("/memberdetails/:id",getmemberdetails)
router.get("/allusers",getAllusers)


export default router;