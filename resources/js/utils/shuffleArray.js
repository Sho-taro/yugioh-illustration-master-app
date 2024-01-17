export const shuffleArray = (array) => {
  const arrayCopy = [...array];
  const arrayNew = [];

  while (arrayCopy.length >= 1) {
    const rand = Math.floor(Math.random() * arrayCopy.length);
    arrayNew.push(...arrayCopy.splice(rand, 1));
  }

  return arrayNew;
}