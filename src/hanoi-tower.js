const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let n = Math.pow(2, disksNumber) - 1;
  let s = Math.trunc((3600 / turnsSpeed) * n);
  return { turns: n, seconds: s }
};
