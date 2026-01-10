import app from "./server.js"
import mongodb, { ServerApiVersion } from "mongodb"
// import reviewsDAO from "./dao/reviewsDAO.js"



// mongodb connection
const mongoClient = mongodb.MongoClient
const mongo_username = (process.env.MONGO_USERNAME)
const mongo_password = (process.env.MONGO_PASSWORD)
const mongo_uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.wxoq7i2.mongodb.net/?appName=Cluster0`
const mongo_db = process.env.MONGO_DB
const port = 8000

// mongoClient.connect(mongo_uri, 
//     {
//         maxPoolSize: 50,
//         wtimeoutMS: 2500,
//         // useNewUrlParser: true
//     }
// ).catch(err => {
//     console.error(err.stack)
//     process.exit(1)
// }).then(async client => {
//     app.listen(8000, ()=>{
//         console.log(`server is active: ${mongo_username}:${mongo_password}:${mongo_uri}`)
//     })
// })



async function connectToDatabase(){
    const client = new mongoClient(mongo_uri)

    try {
        await client.connect()
        console.log("connected successfully to mongodb")

        const db = client.db('reviews')
        console.log(`connected successfully to ${mongo_db}`)

    } catch (error) {
        console.error(error)
    }
    finally{
        await client.close()
    }
}

connectToDatabase().catch(console.error);