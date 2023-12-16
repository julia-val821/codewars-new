//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
  let arr = [];
  for(let el of s){
    if(el !== '#'){
      arr.push(el)
    }else {
      arr.pop();
    }
  }
  return arr.join('');
}
