//https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

function sum(arr){
  let s = 0;
  for(let el of arr){
    s += el;
  }
  return s;
}

function arrayLeaders(numbers){
  return numbers.filter((el, i) => el > sum(numbers.slice(i + 1)));
}
