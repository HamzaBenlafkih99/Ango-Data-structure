// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const j = str.length;
  let palindrome = false;
  for (i = 0; i < j / 2; i++) {
    if (str[i] === str[j - 1 - i]) {
      palindrome = true;
    } else {
      return false;
    }
  }
  return palindrome;
}

function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

palindrome("abba");
palindrome("abcdefg");

module.exports = palindrome;
