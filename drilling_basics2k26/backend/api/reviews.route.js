import express from 'express'


const router = express.Router()


router.route("/").get((req, res)=>{
    res.send("hello world").statusCode(200)
})


export default router