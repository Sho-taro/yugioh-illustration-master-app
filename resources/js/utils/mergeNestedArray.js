export const mergeNestedArray = (nestedArray) => {
  // console.log(nestedArray)
  let merged = [];
  for (let i = 0; i < nestedArray.length; i++){
    merged = [...merged, ...nestedArray[i]];
  }

  // console.log(merged);
  return merged;
}