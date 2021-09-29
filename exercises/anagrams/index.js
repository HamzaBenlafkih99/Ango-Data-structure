// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function objOfString(str) {
  const obj = {};
  str.forEach((element) => {
    if (!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
  });

  return obj;
}

function anagrams(stringA, stringB) {
  let matche = false;
  const str1 = stringA.replace(/[^\w]/g, "").toLowerCase().split("");
  const str2 = stringB.replace(/[^\w]/g, "").toLowerCase().split("");

  const objStr1 = objOfString(str1);
  const objStr2 = objOfString(str2);

  for (let el in objStr1) {
    if (objStr1[el] === objStr2[el]) {
      matche = true;
    } else {
      return false;
    }
  }
  return matche;
}
anagrams("rail safety", "fairy tales");

module.exports = anagrams;
