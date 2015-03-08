/*global describe, it, window, expect, define*/
describe("Enum (common browser environment)", function () {

  it("should be registered as a global object", function () {

    expect(window.Enum).toBeDefined();
  });

  it("should expose a .define() method to create global enums", function () {

    var Enum = window.Enum;

    Enum.define('Beverage', ['BEER', 'SODA', 'JUICE']);

    expect(window.Beverage.BEER).toBeDefined();
    expect(window.Beverage.SODA).toBeDefined();
    expect(window.Beverage.JUICE).toBeDefined();
  });
});