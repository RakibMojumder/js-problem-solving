/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let count = 0;
  for (let item of arr) {
    if (count === 3) break;
    if (item % 2 !== 0) {
      count += 1;
    } else {
      if (count > 0) {
        count = 0;
      }
    }
  }

  return count >= 3;
};
