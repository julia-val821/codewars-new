//https://www.codewars.com/kata/5a145ab08ba9148dd6000094/train/javascript

function doubles(s){
  let arr = [];
  for(let i = 0; i < s.length; i++){
    if(s.length === 0 ||s[i] !== arr[arr.length -1]){
      arr.push(s[i]);
    } else{
      arr.pop();
    }
  }
  return arr.join('');
}
