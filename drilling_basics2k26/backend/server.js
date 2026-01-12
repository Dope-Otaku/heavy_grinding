import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js" //for url we are creating a new folders from where all the routes will be stored


const app = express()

// adding middlewares
app.use(cors())
app.use(express.json())

app.use("/api/v1/reviews", reviews)




export default app;
