const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let repeatTimes = 1, additionRepeatTimes = 1, separator = '+', additionSeparator = '|', addition = '';
  if (options.repeatTimes) {
    repeatTimes = options.repeatTimes
  }
  if (options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes
  }
  if (options.separator) {
    separator = options.separator
  }
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator
  }
  if (options.addition === false) {
    addition = 'false'
  }
  if (options.addition === null) {
    addition = 'null'
  }
  if (options.addition) {
    addition = options.addition
  }
  let item = str, res = '';
  for (i = 0; i < additionRepeatTimes; i++) {
    item += addition;
    if (i !== (additionRepeatTimes - 1)) {
      item += additionSeparator
    }
  }
  for (i = 0; i < repeatTimes; i++) {
    res += item;
    if (i !== (repeatTimes - 1)) {
      res += separator
    }
  }
  return res
};
