const regularOrderIndex = [];

// 空の配列を作る(計68個)
for (let s = 0; s < 68; s++) {
  regularOrderIndex.push([]);
}

// 「17個の配列にそれぞれ要素を入れていく」のを4回繰り返す
for (let i = 0; i < 4; i++) {

  // 空の配列に数字を入れていく（index 0から7まで）
  for (let s = 0; s < 8; s++) {
    for (let t = 0; t < 8; t++) {
      regularOrderIndex[s + (i * 17)].push(
        0 + i * 512 + s * 4 + t * 32,
        1 + i * 512 + s * 4 + t * 32,
        2 + i * 512 + s * 4 + t * 32,
        3 + i * 512 + s * 4 + t * 32
      );
    }
  }

  // 空の配列に数字を入れていく(index 8)
  for (let t = 0; t < 8; t++) {
    regularOrderIndex[8 + (i * 17)].push(256 + i * 512 + t * 32, 257 + i * 512 + t * 32);
  }

  // 空の配列に数字を入れていく(index 9から15まで)
  for (let s = 9; s < 16; s++) {
    for (let t = 0; t < 8; t++) {
      regularOrderIndex[s + i * 17].push(
        258 + i * 512 + (s - 9) * 4 + t * 32,
        259 + i * 512 + (s - 9) * 4 + t * 32,
        260 + i * 512 + (s - 9) * 4 + t * 32,
        261 + i * 512 + (s - 9) * 4 + t * 32
      );
    }
  }

  // 空の配列に数字を入れていく(index 16)
  for (let t = 0; t < 8; t++) {
    regularOrderIndex[16 + (i * 17)].push(286 + i * 512 +  t * 32, 287 + i * 512 + t * 32);
  }

}
// console.log(regularOrderIndex);

export { regularOrderIndex };