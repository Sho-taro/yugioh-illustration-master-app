import { getRandomNum } from './getRandomNum';

// 配列内の要素の順番をランダムに並べ替える関数
export const changeValsOrder = (array) => {
  const newArray = [];

  while (array.length > 0) {
		const deleteIndex = getRandomNum(0, array.length);
		newArray.push(...array.splice(deleteIndex, 1));
  }

  return newArray;
}