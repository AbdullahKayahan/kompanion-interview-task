export const StringValidation = str =>
  str && typeof str === 'string' && str.length;
export const LikeCountString = likeCount => {
  switch (likeCount) {
    case likeCount < 1000:
       likeCount;
      break;
    case likeCount >= 1000 && likeCount < 1000000:
       likeCount / 1000 + ' K';
      break;
    case likeCount >= 1000000:
       likeCount / 1000000 + ' M';
      break;
    default:
         likeCount;
      break;
  }
};
