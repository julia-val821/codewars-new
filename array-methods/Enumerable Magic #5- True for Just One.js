//https://www.codewars.com/kata/54599705cbae2aa60b0011a4/train/javascript

function one(arr, fun){
  arr = arr.filter(el => fun(el));
  return arr.length === 1;
}
