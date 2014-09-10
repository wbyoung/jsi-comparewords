
/**
 * Docs
 *
 * @param {[type]} array1 [description]
 * @param {[type]} array2 [description]
 * @return {[type]} [description]
 */
module.exports.sharedWords = function(array1, array2) {
  var result = [];
  array1.forEach(function(word1) {
    array2.forEach(function(word2) {
      if (word1 === word2) {
        result.push(word1);
      }
    });
  });
  return result;
};
