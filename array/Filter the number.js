//https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

var filterString = function(value) {
  let str = '';
  for(let el of value){
    if(!isNaN(el)){
      str += el;
    }
  }
  return +str;
}
