const express = require('express');
const router = express.Router();

router.use('/animals',require('./animals.js'));
router.use('/posts',require('../posts.js'));


router.get('/test',(req,res)=>{
    res.send('Test');
});
module.exports = router;