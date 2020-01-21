const express = require('express');
const router = express.Router();

router.use('/about',require('./about.js'));
router.use('/story',require('./story.js'));
router.use('/education',require('./education.js'));

router.get('/test',(req,res)=>{
    res.send('Test');
});
module.exports = router;