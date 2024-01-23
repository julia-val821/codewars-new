//https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

//1
function tidyNumber(n){
  let newNumber = +String(n).split('').sort().join('');
  return newNumber === n ? true : false;
}

//2
function tidyNumber(n){
  return +String(n).split('').sort().join('') === n;
}
