//https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

//1
function last(x){
  return x.split(' ').sort((a,b) => a[a.length - 1] > b[b.length - 1] ? 1 : a[a.length - 1] === b[b.length - 1] ? a[a.length - 2] > b[b.length - 2] : -1);
}

//2
function last(x){
  return x.split(' ').sort((a, b)=> a.slice(-1) > b.slice(-1) ? 1 : a.slice(-1) === b.slice(-1) ? a.slice(-2) > b.slice(-2) : -1);
}
