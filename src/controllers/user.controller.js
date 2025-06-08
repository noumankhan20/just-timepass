import User from "../models/user.model.js";

const registerUser= async (req, res) => {
    const {email,password,firstname,lastname,age,phone}=req.body;
    try {
        const user =new User({
            email,
            firstname,
            lastname,
            password,
            age,
            phone,
        });
        await user.save();
        res.status(201).json({message:"Hogaya aagaya pehla user"});
    }
        catch(error){
            res.status(500).json({message:"Internal server error", error:error.message});
        }
    };



export {registerUser};
    