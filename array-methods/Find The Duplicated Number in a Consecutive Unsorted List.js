//https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript

function findDup( arr ){
  return arr.filter((el, i) => arr.indexOf(el) !== arr.lastIndexOf(el) && i === arr.indexOf(el))[0];
}
