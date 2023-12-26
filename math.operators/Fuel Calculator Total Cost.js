//https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript

function fuelPrice(litres, pricePerLitre) {
  let priceTotal;
  let discount = 0;
  if(litres >= 10){
    discount = 0.25;
  }else if(litres >= 8){
    discount = 0.2
  }else if(litres >= 6){
    discount = 0.15;
  }else if(litres >= 4){
    discount = 0.1;
  }else if(litres >= 2){
    discount = 0.05;
  }
  priceTotal = litres * (pricePerLitre - discount);
  return Number(priceTotal.toFixed(2));
}
