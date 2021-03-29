const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date)
    return 'Unable to determine the time of year!';
  if (Object.prototype.hasOwnProperty.call(date, "getMonth")) {
    throw new TypeError;
  }
  if (date instanceof Date) {
    let res = '';
    switch (date.getMonth() + 1) {
      case 12:
      case 1:
      case 2:
        res = 'winter';
        break;
      case 3:
      case 4:
      case 5:
        res = 'spring';
        break;
      case 6:
      case 7:
      case 8:
        res = 'summer';
        break;
      case 9:
      case 10:
      case 11:
        res = 'autumn';
        break;
    }
    return res;
  }
  else
    throw new Error('Pass the Date as a param!');
};
