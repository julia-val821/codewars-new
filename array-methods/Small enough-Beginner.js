//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

//1
function smallEnough(a, limit){
  return a.every(el => el <= limit);
}

//2
function smallEnough(a, limit){
  return !a.some(el => el > limit);
}
