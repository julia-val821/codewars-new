//https://www.codewars.com/kata/5904d222e1bfd3354e000026/train/javascript

function removeDuplication(arr){
  return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
}
