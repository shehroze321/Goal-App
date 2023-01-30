const express =require("express");
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

const router=express.Router();



router.route("/").get( protect,getGoals).post(protect,setGoal);
router.route("/:id").put(protect,updateGoal).delete(protect,deleteGoal);


// router.get("/",(req,res)=>{
   
// })
// router.post("/",(req,res)=>{
//     res.status(200).json({
//         message:"set goal"
//     })
// })
// router.put("/:id",(req,res)=>{
    
// })
// router.delete("/:id",(req,res)=>{

// })

module.exports=router;