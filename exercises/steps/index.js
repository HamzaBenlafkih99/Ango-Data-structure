// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 1) {
  if (row > n) {
    return;
  }
  var step = "";

  for (let i = 0; i < row; i++) {
    step += "#";
  }
  console.log(step);
  return steps(n, row + 1);
}
steps(4);

module.exports = steps;
