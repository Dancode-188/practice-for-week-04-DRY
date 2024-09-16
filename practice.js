function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = compareNums(num1, num2);
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = compareNums(num1, num2);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = compareNums(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = compareNums(weight2, weight1, false);
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

function compareNums(num1, num2, wantBigger = true) {
  if (wantBigger){
    return num1 > num2 ? num1 : num2;
  }
  return num1 < num2 ? num1 : num2;
}



/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};