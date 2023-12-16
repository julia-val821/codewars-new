//https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript

function sumOfN(n) {
  let arr = [0];
  let el = 0;
  for(let i = 1; i <= Math.abs(n); i++){
    el += i;
    n > 0 ? arr.push(el) : arr.push(-el);
  }
  return arr;
}
