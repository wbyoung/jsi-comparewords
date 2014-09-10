
var _ = require('lodash');

/**
 * Docs
 *
 * @param {[type]} array1 [description]
 * @param {[type]} array2 [description]
 * @return {[type]} [description]
 */
module.exports.sharedWords = function(array1, array2) {
  return _.intersection(array1, array2);
};
