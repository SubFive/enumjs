/*global window, define*/
(function () {
  'use strict';

  //Polyfill for IE8-
  var forEach = function (scope, fn) {

    var i, len;

    len = scope.length;

    for (i = 0; i < len; i++) {
      if (scope.hasOwnProperty(i)) {
        fn.call(scope, scope[i], i, scope);
      }
    }
  };

  function Enum(elements, toString) {

    var self = this;

    forEach(elements, function (currentValue) {

      self[currentValue] = {
        toString: function () {
          return toString ? toString(this) : currentValue;
        }
      };
    });

    if (typeof Object.freeze === 'function') {
      Object.freeze(self);
    }
  }

  // register for AMD/require
  if (typeof define === 'function') {

    define(function () {
      return Enum;
    });

  // register for NodeJS
  } else if (typeof module === 'object' && typeof module.exports === 'object') {

    module.exports = Enum;

  // register for pure JavaScript browser environment
  } else {

    window.Enum = {
      define: function (name, elements, toString) {
        window[name] = new Enum(elements, toString);
      }
    };

  }
}());