//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

//1
function arrayDiff(a, b) {
  let arr = [];
  for(let i = 0; i < a.length; i++){
    if(b.includes(a[i]) === false){
      arr.push(a[i]);
    }
  }
  return arr;
}

//2
function arrayDiff(a, b) {
  return a.filter(el => !b.includes(el));
}
