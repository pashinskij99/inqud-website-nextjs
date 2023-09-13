export const rem = (px) => {
  const x = 16;
  return `${1 / x * px}rem`;
}