export const StringValidation = str =>
  str && typeof str === 'string' && str.length;

const SUBFIX_SYMBOL = ['', 'K', 'M', 'G', 'T', 'P', 'E'];

export const LikeCountString = number => {
  let tier = (Math.log10(Math.abs(number)) / 3) | 0;
  if (tier == 0) {
    return number;
  }
  var suffix = SUBFIX_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);
  var scaled = number / scale;
  return scaled.toFixed(1) + suffix;
};
