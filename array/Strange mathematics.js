//https://www.codewars.com/kata/604517d65b464d000d51381f/train/javascript

function strangeMath(n, k){
  let arr = [];
  for(let i = 1; i <= n; i++){
    arr.push(i);
  }
  arr.sort();
  return arr.indexOf(k) + 1;
}
