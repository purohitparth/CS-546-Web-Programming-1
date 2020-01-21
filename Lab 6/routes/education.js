const express = require('express');
const router =  express.Router();
 router.get('/',(req,res) => {
res.send([{
      "schoolName": "Parul University",
      "degree": "B.Tech",
      "favoriteClass": "Oh iloved  my Theory of Computation class by Raviraj Sir. That guy was a legend. He though so nicely, and also as we had mandatory 75% attendance policy, that guy was good with me, he would mark me as present",
      "favoriteMemory": "Once, we blew crackers in the class"
    },
    {
        "schoolName": "Stevens Institue of Technology",
      "degree": "MS",
      "favoriteClass": " My favorite Class in Stevens so far has been CS-546 coz I dont need to go to actually go to class for it lol. Please give me those Grades professor. I know I kinda messed up last assignments, I'm really struggling with them. HELLP",
      "favoriteMemory": "In Stevens , I don't really have any good memories yet. So lets make this one up. LEt's say I was studying in Library and then headed out for a smoke, a girl joined me by asking for my lighter. And then we happily lived together ever after. See smoking is not all that bad after all"
    },
    {
        "schoolName": "St Francis",
      "degree": "High School",
      "favoriteClass": " My favorite Class in Stevens so far has been CS-546 coz I dont need to go to actually go to class for it lol. Please give me those Grades professor. I know I kinda messed up last assignments, I'm really struggling with them. HELLP",
      "favoriteMemory": "In Stevens , I don't really have any good memories yet. So lets make this one up. LEt's say I was studying in Library and then headed out for a smoke, a girl joined me by asking for my lighter. And then we happily lived together ever after. See smoking is not all that bad after all"
    }])
 });
 module.exports = router;
