export function randomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const randomColorGenerator = (params, col) => {
  let randomColors = [];
  let colorRandom = [...col];
  for (let i = 0; i < params; i++) {
    const randNum = colorRandom[Math.floor(Math.random() * colorRandom.length)];
    randomColors.push(randNum);
  }
  return randomColors;
};
