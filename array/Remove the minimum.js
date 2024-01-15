//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

//1
function removeSmallest(numbers) {
  let min = Math.min(...numbers);
  let index = numbers.indexOf(min);
  let arr = [];
  for(let i = 0; i < numbers.length; i++){
    if(i !== index){
      arr.push(numbers[i]);
    }
  }
  return arr;
}

//2
function removeSmallest(numbers) {
  if(numbers.length === 0) return [];
  let min = Math.min(...numbers);
  let indexMin = numbers.indexOf(min);
  let arr = [];
  for(let i = 0; i < numbers.length; i++){
    if(i !== indexMin){
      arr.push(numbers[i]);
    }
  }
  return arr;
}

//3
function removeSmallest(numbers) {
  let min = Math.min(...numbers);
  return numbers.filter((el, i) => i !== numbers.indexOf(min));
}
