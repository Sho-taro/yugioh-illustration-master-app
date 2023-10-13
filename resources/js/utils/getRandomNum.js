// from以上to未満のランダムな数を１つ返す関数　（未満であることに注意）

export const getRandomNum = (from, to) => {
  return Math.floor(Math.random() * to) + from;
}