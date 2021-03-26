const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members))
    return false;
  let arr = []

  members.forEach(element => {
    if (typeof (element) === 'string') {
      arr.push(element.replace(/ /gi, '').slice(0, 1).toUpperCase());
    }
  });
  let str = arr.sort().join('');
  return str
};
