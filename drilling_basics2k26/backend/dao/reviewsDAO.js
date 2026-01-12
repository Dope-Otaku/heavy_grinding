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

    static async addReview(movieId, review, user){
        try {
            const reviewDoc = {
                movieId: movieId,
                review: review,
                user: user
            }
            return await reviews.insertOne(reviewDoc)
        } catch (e) {
            console.error(`Unable to Post review : ${e}`)
            return {error: e}
        }
    }
}