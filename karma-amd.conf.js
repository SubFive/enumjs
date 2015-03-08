module.exports = function (config) {

  config.set({
    basePath: '.',
    frameworks: ['jasmine', 'requirejs'],
    autoWatch: true,
    files: [
      {pattern: 'enum.js', included: false},
      {pattern: 'spec/browser/EnumAMDRequireSpec.js', included: false},
      'spec/browser/test-main.js'
    ],
    browsers: ['Chrome']
  });
};