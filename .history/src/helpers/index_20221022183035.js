export const StringValidation = str =>
  str && typeof str === 'string' && str.length;
 = _likeCount => {
  alert(typeof _likeCount);
if(typeof _likeCount == "number")
  if (_likeCount < 1000) {
    return _likeCount;
  } else if (_likeCount >= 1000 && _likeCount < 1000000) {
    return parseFloat(_likeCount / 1000) + ' K';
  } else if (_likeCount >= 1000000) {
    alert(_likeCount)
    alert("parsed: " +parseFloat(_likeCount/1000000))
    return parseFloat(_likeCount / 1000000) + ' M';
  }
};


const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

export const LikeCountString=(number)=>{

    // what tier? (determines SI symbol)
    var tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}