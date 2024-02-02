//https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript

function mergeArrays(a, b) {
  let arr = [];
  let max = Math.max(a.length, b.length);
  for(let i = 0; i < max; i++){
    arr.push(a[i], b[i]);
  }
  return arr.filter(el => el !== undefined);
}
