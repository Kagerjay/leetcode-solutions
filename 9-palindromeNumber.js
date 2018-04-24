/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = "" + x;
  let revStr = x.split("").reverse().join("");
  return (revStr == x) ? true: false;
};

isPalindrome(121);
// true
