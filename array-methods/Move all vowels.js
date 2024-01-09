//https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript

function moveVowel(input) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  input = input.split('');
  let consonantInput = input.filter(el => !vowels.includes(el)).join('');
  let vowelsInput = input.filter(el => vowels.includes(el)).join('');
  return consonantInput + vowelsInput;
}
