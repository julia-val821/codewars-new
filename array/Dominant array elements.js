//https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript

//1
function solve(arr) {
  let arr1 = [];
  for(let i = 0; i < arr.length; i++){
    let s = arr.slice(i + 1);
    if(arr[i] > Math.max(...s)){
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

//2
function solve(arr) {
  return arr.filter((el, i) => el > Math.max(...arr.slice(i + 1)));
}
