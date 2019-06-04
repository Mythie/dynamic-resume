/* eslint-disable */
const sass = require('node-sass');
const config = require('./config');

const sassUtils = require('node-sass-utils')(sass);

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        functions: {
          /* eslint-disable */
          'get($keys)': function (keys) {
            keys = keys.getValue().split('.');
            let result = config;
            let i;
            for (i = 0; i < keys.length; i++) {
              result = result[keys[i]];
            }
            result = sassUtils.castToSass(result);
            return result;
          },
          /* eslint-enable */
        },
      },
    },
  },
};
