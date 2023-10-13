import { moreMixedOrderIndex } from './moreMixedOrderIndex';

const randomIndexFirst = [];
for (let i = 0; i < 34; i++){
  randomIndexFirst.push(moreMixedOrderIndex[i]);
};

const randomIndexSecond = [];
for (let i = 34; i < 68; i++){
  randomIndexSecond.push(moreMixedOrderIndex[i]);
};

export { randomIndexFirst, randomIndexSecond };
// それぞれ要素の順番入れ替えた後に１つの配列に結合したものを、animateBlock関数に渡す