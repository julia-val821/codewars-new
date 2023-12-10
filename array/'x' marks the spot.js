//https://www.codewars.com/kata/5777fe3f355edbf0a5000d11/train/javascript
const XMarksTheSpot = (input) => {
  let count = 0;
  let a, b;
  for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
      if(input[i][j] === 'x') {
        a = i; b = j;
        count++;
      }
    }
  }
  return count === 1 ? [a,b] : [];
}
