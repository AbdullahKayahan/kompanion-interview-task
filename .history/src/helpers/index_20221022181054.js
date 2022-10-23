export const StringValidation = str =>
  str && typeof str === 'string' && str.length;
export const LikeCountString = likeCount => {
  switch (true) {
    case likeCount < 1000:
       return likeCount;
      break;
    case likeCount >= 1000 && likeCount < 1000000:
        return (parseInt(likeCount) / 1000) + ' K';
      break;
    case likeCount >= 1000000:
        return(parseInt(likeCount) / 1000000) + ' M';
      break;
    default:
        return likeCount ;
      break;
  }
};
