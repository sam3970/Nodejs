const { odd, even } = require('/root/nodejs/study/var.js');
const checkNumber = require('/root/nodejs/study/func.js');

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
