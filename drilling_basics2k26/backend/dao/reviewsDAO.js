import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId



let reviews


export default class ReviewsDAO{
    static async injectDB(conn){
        if(reviews){
            return
        }
        try {
            await conn.db("reviews").collection("reviews")
        } catch (e) {
            console.error(`Unable to establish Data Collection handles : ${e}`)
        }
    }
}