const express = require('express');
const router =  express.Router();
 router.get('/',(req,res) => {
res.send({
    "name": "Parth Purohit",
    "cwid": "10451777",
    "biography": "In the town of Bhayander in Mumbai, India, a legend was born on 21st May 1997 at 10 am. This legend ain't me. But , I was born on same date lol. I am Parth Purohit and I am a grad student at Stevens pursuing MS in CS. I am from Mumbai, India and I have done my bachelors in Computer Science from Parul Unversity. /n Unpopular Opinion: New york is not very different frm Mumbai.",
    "favoriteShows": ["Breaking Bad", "GOT", "Narcos", "Friends"],
    "hobbies": ["Driving", "Hiking", "Music"]
  })
 });
 module.exports = router;
