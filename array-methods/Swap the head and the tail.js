//https://www.codewars.com/kata/5a34f087c5e28462d9000082/train/javascript

function swapHeadAndTail(arr) {
  let lengthArr = arr.length;
  let middleIndex = Math.floor(lengthArr / 2);
  if(lengthArr % 2 === 0){
    let head = arr.slice(0, middleIndex);
    let tail = arr.slice(middleIndex);
    return tail.concat(head);
  }
  if(lengthArr % 2 !== 0){
    let head = arr.slice(0, middleIndex);
    let tail = arr.slice(middleIndex + 1);
    return tail.concat(arr[middleIndex], head);
  }
}
