//https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript

function chessBoard(rows, columns) {
  let arr1 = [];
  for(let i = 0; i < rows; i++){
    let tempArr = [];
    for(let j = 0; j < columns; j++){
      if((i + j) % 2 === 0){
        tempArr.push('O');
      } else {
        tempArr.push('X');
      }
    }
    arr1.push(tempArr);
  }
  return arr1;
}
