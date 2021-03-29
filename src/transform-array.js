const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error('There is not an Array!');
  let res = [...arr];
  res.forEach((el, index) => {
    switch (el) {
      case '--discard-next':
        if (res[index + 2] === '--double-prev' || res[index + 2] === '--discard-prev') {
          res.splice(index, 3);
        }
        else
          res.splice(index, 2);
        break;
      case '--discard-prev':
        if (index === 0) {
          res.splice(index, 1);
        }
        else
          res.splice(index - 1, 2);
        break;
      case '--double-next':
        if (index === res.length - 1) {
          res.splice(index, 1);
        }
        else
          res.splice(index, 1, res[index + 1]);
        break;
      case '--double-prev':
        if (index === 0) {
          res.splice(index, 1);
        }
        else
          res.splice(index, 1, res[index - 1]);
        break;
    }
  });
  return res
};
