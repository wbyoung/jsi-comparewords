var chai = require('chai');
var expect = chai.expect;

var functions = require('../index');
var sharedWords = functions.sharedWords;

describe('compareWords()', function() {
  it('compares words', function() {
    var words1 = ['cat', 'dog'];
    var words2 = ['black', 'dog'];
    var result = sharedWords(words1, words2);
    expect(result).to.eql(['dog']);
  });
});
