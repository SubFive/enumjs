/*global require, window*/
require.config({
  baseUrl: '/base',
  paths: {
    'enum': './enum'
  },
  deps: ['spec/browser/EnumAMDRequireSpec'],
  callback: window.__karma__.start
});