
/**
 * Docs
 *
 * @param {[type]} array1 [description]
 * @param {[type]} array2 [description]
 * @return {[type]} [description]
 */
module.exports.sharedWords = function(array1, array2) {

  var result = [];
  var knownWords = {};
  array1.forEach(function(word) {
    knownWords[word] = true; // <- could have any value
  });

  array2.forEach(function(word) {
    if (knownWords[word]) {
      result.push(word);
    }
  });

  return result;
};
