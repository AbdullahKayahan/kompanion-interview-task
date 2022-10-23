export const StringValidation = str =>
  str && typeof str === 'string' && str.length;
export const LikeCountString = _likeCount => {
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
