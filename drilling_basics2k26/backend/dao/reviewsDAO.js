import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId



let reviews;
// console.log(`It should be undefined or nulll here: ${reviews}`)


export default class ReviewsDAO{
    static async injectDB(client){
        if(reviews){
            return;
        }
        try {
            reviews = await client.db("reviews").collection("reviews")
            console.log("connected with mongodb successfully")
            // console.log(reviews)
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

    static async getReview(reviewId){
        try {
            const reviewResponse = await reviews.findOne({_id: ObjectId(reviewId)})
            return reviewResponse
        } catch (e) {
            console.error(`Unable to fetch review : ${e}`)
            return {error: e}
        }
    }

    static async updateReview(reviewId, user, review){
        try {
            const reviewDoc = {
                _id: ObjectId(reviewId),
                $set: {
                    user: user,
                    review: review
                }
            }
            const updatedResponse =  await reviews.updateOne(reviewDoc)
            return updatedResponse
        } catch (e) {
            console.error(`Unable to Post review : ${e}`)
            return {error: e}
        }
    }

    static async deleteReview(reviewId){
        try {
            const reviewResponse = await reviews.deleteOne({_id: ObjectId(reviewId)})
            return reviewResponse
        } catch (e) {
            console.error(`Unable to fetch review : ${e}`)
            return {error: e}
        }
    }

    static async getReviewsByMovieId(movieID){
        try {
            const allReviews =   await reviews.find({movieID: parseInt(movieID)})
            return allReviews.toArray()
        } catch (e) {
            console.error(`Unable to Post review : ${e}`)
            return {error: e}
        }
    }
}