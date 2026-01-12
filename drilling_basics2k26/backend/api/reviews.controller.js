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
}