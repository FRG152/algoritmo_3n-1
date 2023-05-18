export const algorithm = function (n) {
  let arr = [];
  arr.push(n);
  while (n !== 1) {
    n = n % 2 ? 3 * n + 1 : n / 2;
    arr.push(n);
  }
  return arr;
};
