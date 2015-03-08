module.exports = function (config) {

  config.set({
    basePath: 'spec/browser',
    frameworks: ['jasmine'],
    autoWatch: true,
    files: [
      '../../enum.js',
      'EnumCommonBrowserEnvironmentSpec.js'
    ],
    browsers: ['Chrome']
  });
};