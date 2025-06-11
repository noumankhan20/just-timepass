import {registerUser,
    loginuser,getmemberdetails,
    getAllusers,
    deleteuser,
} from "../controllers/user.controller.js";
import {Router} from "express";
const router= Router();

router.post("/register",registerUser);
router.post("/login",loginuser);

router.get("/memberdetails/:id",getmemberdetails)
router.get("/allusers",getAllusers)

router.delete("/deleteuser",deleteuser);

export default router;