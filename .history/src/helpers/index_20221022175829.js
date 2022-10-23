export const StringValidation = str =>
  str && typeof str === 'string' && str.length;
export const LikeCountString = likeCount => {
  switch (Number(likeCount)) {
    case Number(likeCount) < 1000:
       return likeCount;
      break;
    case Number(likeCount) >= 1000 || Number(likeCount) < 1000000:
        return likeCount / 1000 + ' K';
      break;
    case Number(likeCount) >= 1000000:
        return likeCount / 1000000 + ' M';
      break;
    default:
        return likeCount + "d";
      break;
  }
};
