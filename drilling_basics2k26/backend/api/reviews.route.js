import express from 'express'
import ReviewsCtrl from "./reviews.controller.js"


const router = express.Router()


router.route("/").get((req, res)=>{
    res.send("hello world")
})


// imp update: in express 5.0.0 and above don't use (*) directly in any routes instead use /(.*)/
router.route(/(.*)/).get((req, res)=>{
    res.status(404).json({error: "pitched in wrong page"})
})

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPostReview)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router