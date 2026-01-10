import app from "./server.js"
import mongodb from "mongodb"
// import reviewsDAO from "./dao/reviewsDAO.js"



// mongodb connection
const mongoClient = mongodb.MongoClient
const mongo_username = process.env.MONGO_USERNAME
const mongo_password = process.env.MONGO_PASSWORD
const mongo_uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.wxoq7i2.mongodb.net/?appName=Cluster0`


app.listen(5000, ()=>{
    console.log(`server is active: ${mongo_username}:${mongo_password}:${mongo_uri}`)
})