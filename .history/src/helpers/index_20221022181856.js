export const StringValidation = str =>
  str && typeof str === 'string' && str.length;
export const LikeCountString = likeCount => {
  alert('ss ' + likeCount);

  if (likeCount < 1000) {
    return likeCount;
  } else if (likeCount >= 1000 && likeCount < 1000000) {
    return parseFloat(likeCount / 1000) + ' K';
  } else if (likeCount >= 1000000) {
    return parseFloat(likeCount / 1000000) + ' M';
  }
};
