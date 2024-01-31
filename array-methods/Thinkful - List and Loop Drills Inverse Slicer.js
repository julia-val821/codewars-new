//https://www.codewars.com/kata/586ec0b8d098206cce001141/train/javascript

//1
function inverseSlice(items, a, b) {
  return items.slice(0, a).concat(items.slice(b));
}

//2
function inverseSlice(items, a, b) {
  items.splice(a, b-a);
  return items;
}
