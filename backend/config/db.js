

const mongoose= require("mongoose");

const connectDatabase=()=>{
       mongoose.connect(process.env.MONGO_URI).then((data)=>{
        console.log(`Mongodb connected with server`);
    })
}


module.exports=connectDatabase;

// const mongoose = require('mongoose')

// const connectDatabase = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI)

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   }
// }

// module.exports = connectDatabase