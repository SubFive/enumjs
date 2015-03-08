/*global describe, it, window, expect, define*/

define(['enum'], function (Enum) {
  describe("Enum (AMD/require environment)", function () {

    it("should not be registered as a global object", function () {

      expect(window.Enum).toBeUndefined();
    });

    it("should be registered as AMD module", function () {

      var myEnum = new Enum(['FIRST', 'SECOND']);

      expect(myEnum.FIRST).toBeDefined();
      expect(myEnum.SECOND).toBeDefined();
    });
  });
});