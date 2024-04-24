const express = require('express');
const router = express.Router()


router.post('/fooddata', (req, res) => {


    try {
        console.log(global.food_items, global.categoryData)
        res.send([global.food_items, global.categoryData])
    } catch (error) {
        console.log(error)
        res.send("Server Error")
    }


})
module.exports = router