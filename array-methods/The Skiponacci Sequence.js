//https://www.codewars.com/kata/580777ee2e14accd9f000165/train/javascript

function skiponacci(n) {
  if(n === 1) return "1";
  let arr = [1, 1];
  for(let i = 2; i < n; i++){
    arr.push(arr[i -2] + arr[i - 1]);
  }
  return arr.map((el, i) => i % 2 ? 'skip' : el ).join(' ');
}
