//https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript
function elevatorDistance(array) {
  let sum = 0;
  for(let i = 0; i < array.length - 1; i++){
    sum += Math.abs(array[i] - array[i + 1]);
  }
  return sum;
}
