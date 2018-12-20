var { getOptions } = require('loader-utils');
var validateOptions = require('schema-utils');

module.exports = function(source) {
  const options = getOptions(this) || {};
  validateOptions(require('./options.json'), options, 'rpx2rem Loader');
  if (options.remUnit) {
    source = source.replace(/(\d*rpx)/g,function($0) {
      let val = $0.replace('rpx','');
      return parseFloat(val)/options.remUnit + 'rem'
    })
  }
  return source;
};
