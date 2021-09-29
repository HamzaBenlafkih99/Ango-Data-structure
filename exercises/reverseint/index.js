// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var number = n.toString();
  var sign = "";
  if (Math.sign(n) === -1) {
    number = number.substring(1);
    sign = "-";
  }

  number = number.split("").reverse().join("");
  return parseInt(sign.concat(number));
}
reverseInt(15);

module.exports = reverseInt;
