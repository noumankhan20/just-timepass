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
        res.status(201).json({message:"User registered successfully",user});
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
     res.status(200).json({message:"User Logges in successfully",user});
   } catch (error) {
    res.status(500).json({message:"Internal server error",error:error.message});
    
   }
}

const getmemberdetails= async(req,res)=>{
    const {id}=req.params;
      try {
          const user =await User.findById(id);
          if(!user){
              return res.status(404).json({messsage:"User not found"});
            }
              return res.status(200).json({
                  message:"User details fetched successfully",
              user: {
                email:user.email,
                phone:user.phone,
                firstname:user.firstname,
                age:user.age,
                lastname:user.lastname
              },
            
              });
      } catch (error) {
            res.status(500).json({message:"Internal server error",error:error.message});
        
      }

}


const getAllusers= async (req,res)=>{
    try {
        const users = await User.find({},'email phone firstname age lastname');
        return res.status(200).json({
            message:"All users fetched successfully",
        users});
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error",
            error:error.message
        });
        
    }
}

const deleteuser = async(req,res)=>{
    try {
        const{email}=req.body;
        const user = await User.findOneAndDelete({email:email});
        if (!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        return res.status(200).json({
            message:"User deleted successfully",
            user:user
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
        
    }
}

export {registerUser,loginuser,getmemberdetails,getAllusers,deleteuser};
    