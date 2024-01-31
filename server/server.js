import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {readdirSync} from "fs";


const morgan = require("morgan");
require("dotenv").config();
const app = express();
mongoose.connect(process.env.DATABASE , {
    useNewUrlParser : true,
})
.then(()=>console.log("DATABASE CONNECTED"))
.catch((err)=>console.log(err))





app.use(express.json({limit : "5mb"}));
app.use(express.urlencoded({extended:true}));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

/**==================================================================== */
/**==================================================================== */
/**==================================================================== */
/**==================================================================== */
readdirSync("./routes").map((f)=>app.use("/api" ,require(`./routes/${f}`) ));
/**==================================================================== */
/**==================================================================== */
/**==================================================================== */
/**==================================================================== */

const PORT = process.env.PORT || 8000 ;

app.listen(PORT , ()=>{
    console.log(`server running on http://localhost:${PORT}`);
} )