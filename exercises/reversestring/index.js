// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reverseStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr.concat(str[i]);
  }
  return reverseStr;
}

reverse("hello");

module.exports = reverse;
