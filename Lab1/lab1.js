const questionOne = function questionOne(arr) {
    var i;
    var result=0;
for (i = 0; i < arr.length; i++) {
  result += (arr[i]*arr[i]);
  
}
return result;
}

const questionTwo = function questionTwo(num) { 
    if (num == 0) return 0;
    if (num == 1) return 1;

    var prevprev = 0;
    var prev = 1;
    var result1 = 0;

    for (var i = 2; i <= num; i++)
    {
        result1 = prev + prevprev;
        prevprev = prev;
        prev = result1;
    }
    return result1;
    }


const questionThree = function questionThree(text) {
    var vowelslist = 'aeiouAEIOU';
  var count = 0;
  
  for(var x = 0; x < text.length ; x++)
  {
    if (vowelslist.indexOf(text[x]) !== -1)
    {
      count += 1;
    }
  
  }
  return count;
}

const questionFour = function questionFour(num) {
    if (num === 0)
 {
    return 1;
 }
  if(num < 0)
  {
      return NaN;
  }
  return num * questionFour(num-1);
}

module.exports = {
    firstName: "PARTH", 
    lastName: "PUROHIT", 
    studentId: "10451777",
   questionOne,
    questionTwo,
    questionThree,
    questionFour
};