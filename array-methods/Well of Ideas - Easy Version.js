//https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

//1
function well(x){
  x = x.filter(el => el === 'good').length;
  return x > 2 ? 'I smell a series!' : x < 1 ? 'Fail!' : 'Publish!';
}
//2
function well(x){
  x = x.filter(el => el === 'good');
  return (x.length === 1 || x.length === 2) ? 'Publish!' : x.length > 2 ? 'I smell a series!' : 'Fail!'
}
//3
function well(x){
  let a = x.filter(el => el === 'good').length;
  return !a ? "Fail!" : a <= 2 ? "Publish!" : "I smell a series!";
}
