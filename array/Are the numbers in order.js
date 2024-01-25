//https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

//1
function inAscOrder(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i + 1])
      return false;
  }
  return true;
}

//2
function inAscOrder(arr) {
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] > arr[i + 1])
      return false;
  }
  return true;
}

//3
function inAscOrder(arr) {
  return arr.every((el, i) => arr[i - 1] < arr[i] || i === 0);
}
