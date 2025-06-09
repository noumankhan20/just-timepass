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


const loginuser= async (req,res)=>{
    const {email,password}=req.body;
    
   try {
     const user = await User.findOne({
         email:email,
         password:password
     })
     if (!user){
         return res.status(404).json({message:"Bhak laude tu user nhi h "})
     }
     res.status(200).json({message:"Login hogaye aap aaye andar aaye"});
   } catch (error) {
    res.status(500).json({message:"Internal server error",error:error.message});
    
   }
}


export {registerUser,loginuser};
    