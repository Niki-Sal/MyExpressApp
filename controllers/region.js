const express = require('express')
// const axios = require('axios');
const router = express.Router()

const db = require('../models')

router.get('/', (req, res) => {
    
    res.render('fish/newRegion'); 
    
})



module.exports = router