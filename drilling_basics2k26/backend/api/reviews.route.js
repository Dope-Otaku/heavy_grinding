import express from 'express'


const router = express.Router()


router.route("/").get((req, res)=>{
    res.send("hello world")
})


// imp update: in express 5.0.0 and above don't use (*) directly in any routes instead use /(.*)/
router.route(/(.*)/).get((req, res)=>{
    res.status(404).json({error: "pitched in wrong page"})
})


export default router