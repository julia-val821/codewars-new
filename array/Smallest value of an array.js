//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  let min = Math.min(...arr);
  let indexMin = arr.indexOf(min);
  return (toReturn === 'value') ? min : indexMin;
}
