import app from "./server.js"
import mongodb, { ServerApiVersion } from "mongodb"
import reviews from "./api/reviews.route.js"



// mongodb connection
const mongoClient = mongodb.MongoClient
const mongo_username = (process.env.MONGO_USERNAME)
const mongo_password = (process.env.MONGO_PASSWORD)
const mongo_uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.wxoq7i2.mongodb.net/?appName=Cluster0`
const mongo_db = process.env.MONGO_DB
const port = 8000


//need to create a async function for connection with mongodb
const connectDatabase = async() =>{
    const client = new mongoClient(mongo_uri)

    try {
        await client.connect()
        console.log("connected with mongodb")

        const db = client.db()
        console.log(`${db} : connected with the table ${mongo_db}`)
    } catch (error) {
        console.error('connection failed', error)
        process.exit(1);
    }
    //just using this for now: testing period
    finally{
        console.log("application closed")
        process.exit(1);
    }
}

connectDatabase()