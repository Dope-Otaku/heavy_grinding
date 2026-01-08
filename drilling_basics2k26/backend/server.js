import express from "express"
import cors from "cors"


app = express.json()



app.listen(5000, ()=>{
    console.log("server is running on port no 5000")
})