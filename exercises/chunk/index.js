// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];
  var chunked = [];
  const taille = array.length;

  for (let i = 0; i < taille; i++) {
    chunked.push(array[i]);
    if (chunked.length === size || i === taille - 1) {
      result.push(chunked);
      chunked = [];
    }
  }

  return result;
}
chunk([1, 2, 3, 4, 5], 2);

module.exports = chunk;
