// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let maxValue = 0;
  let maxChar = "";
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }

  for (let char in obj) {
    if (maxValue < obj[char]) {
      maxValue = obj[char];
      maxChar = char;
    }
  }
  return maxChar;
}
maxChar("abcccccccd");

module.exports = maxChar;
