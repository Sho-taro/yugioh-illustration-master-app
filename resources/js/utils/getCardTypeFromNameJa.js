export const getCardTypeFromNameJa = (frameTypeNameJa) => {
  if (!frameTypeNameJa) return 'error';
  if (frameTypeNameJa === '魔法' || frameTypeNameJa === '罠') {
    return 'spell/trap';
  } else if (frameTypeNameJa === 'トークン') {
    return 'token';
  } else if (frameTypeNameJa === 'スキル') {
    return 'skill';
  } else {
    return 'monster';
  }
}