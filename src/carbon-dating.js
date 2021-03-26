const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!sampleActivity || typeof (sampleActivity) !== 'string' || !Number(sampleActivity) || Number(sampleActivity) > 15 || Number(sampleActivity) <= 0)
    return false;
  let n = Number(sampleActivity);
  let t = (Math.log(MODERN_ACTIVITY / n) / (0.693 / HALF_LIFE_PERIOD));
  return Math.ceil(t);
};
