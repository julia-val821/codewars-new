//https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript

//1
function compare(a,b) {
  a = a.split(' ')[1];
  b = b.split(' ')[1];
  return a > b ? 1 : -1;
}
function sortReindeer(reindeerNames){
  return reindeerNames.sort(compare);
}

//2
function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a,b) => a.split(' ')[1] > b.split(' ')[1] ? 1 : -1);
}
