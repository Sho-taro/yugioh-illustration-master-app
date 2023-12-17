export const getCardType = (frameTypeCode) => {
  if (frameTypeCode === 'FR0014' || frameTypeCode === 'FR0015') {
    return 'spell/trap';
  } else if (frameTypeCode === 'FR0016') {
    return 'token';
  } else if (frameTypeCode === 'FR0017') {
    return 'skill';
  } else {
    return 'monster';
  }
}