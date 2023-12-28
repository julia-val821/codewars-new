//https://www.codewars.com/kata/5b097da6c3323ac067000036/train/javascript

function solve(a, b) {
  let countA = 0;
  let countB = 0;
  for(let i = 0; i < 3; i++){
    if(a[i] < b[i]){ countB++; }
    if(a[i] > b[i]){ countA++; }
  }
  if(countB > countA) return `${countA}, ${countB}: Bob made "Jeff" proud!`
  if(countA > countB) return `${countA}, ${countB}: Alice made "Kurt" proud!`
  if(countB === countA)return `${countA}, ${countB}: that looks like a "draw"! Rock on!`
}
