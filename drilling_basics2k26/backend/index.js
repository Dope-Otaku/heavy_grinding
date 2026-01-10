import app from "./server.js"
import mongodb from "mongodb"
// import reviewsDAO from "./dao/reviewsDAO.js"




const mongoClient = mongodb.MongoClient
const mongo_username = process.env.MONGO_USERNAME


app.listen(5000, ()=>{
    console.log(`server is active: ${mongo_username}`)
})