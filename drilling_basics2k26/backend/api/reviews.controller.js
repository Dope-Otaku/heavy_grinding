import ReviewsDAO from "../dao/reviewsDAO.js"


export default class ReviewsController {
    static async apiPostReview(req, res, next){
        try {
            const movieId = req.body.movieId
            const review = req.body.review
            const user = req.body.user

            const reviewResponse = await ReviewsDAO.addReview(
                movieId,
                review,
                user
            )
            res.json({status: "success"})

        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiGetReview(req, res, next){
        try {
            let id = req.params.id || {}
            let review = await ReviewsDAO.getReview(id)
            if(!review){
                res.status(404).json({error: "not found"})
                return
            }
            res.send(review)

        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiUpdateReview(req, res, next){
        try {
            const reviewId = req.params.id 
            const review = req.body.review
            const user = req.body.user

            const reviewResponse = await reviewsDAO.updateReview(
                reviewId,
                user,
                review
            )

            var {error} = reviewResponse
            if(error){
                res.status(400).json({error})
            }

            if(reviewResponse.modifiedCount === 0){
                throw new Error(
                    "Unable to update review",
                )
            }


            res.send(review)

        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiDeleteReview(req, res, next){
        try {
            const id = req.params.id 
            let deleteStatus = await ReviewsDAO.deleteReview(id)
            res.send(deleteStatus)

        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiGetReviews(req, res, next){
        try {
            let id = req.params.id || {}
            let reviews = await ReviewsDAO.getReviewsByMovieId(id)
            if(!review){
                res.status(404).json({error: "not found"})
                return
            }
            res.send(reviews)

        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }
}