/*global describe, it, expect*/
describe("Enum", function () {

  var Enum = require('../../enum');

  it("should create a Beverage enum with default toString() method", function () {

    var Beverage = new Enum(['BEER', 'SODA', 'JUICE']);

    expect(Beverage.BEER.toString()).toEqual('BEER');
    expect(Beverage.SODA.toString()).toEqual('SODA');
    expect(Beverage.JUICE.toString()).toEqual('JUICE');
  });

  it("should return false when asserting elements references", function () {

    var myEnum = new Enum(['FIRST', 'SECOND', 'THIRD']);

    expect(myEnum.FIRST === myEnum.SECOND).toBeFalsy();
    expect(myEnum.SECOND === myEnum.THIRD).toBeFalsy();
    expect(myEnum.FIRST === myEnum.THIRD).toBeFalsy();
  });

  it("should retrieve an array with only the elements defined in the enum", function () {

    var spTeams = ['CORINTHIANS', 'SAO_PAULO', 'PALMEIRAS', 'SANTOS'];

    var Teams = new Enum(spTeams);

    expect(Object.keys(Teams)).toEqual(spTeams);
  });

  it("should define a custom toString() method", function () {

    var spTeams = ['CORINTHIANS', 'SAO_PAULO', 'PALMEIRAS', 'SANTOS'];

    var Teams = new Enum(spTeams, function (value) {

      switch (value) {

      case Teams.CORINTHIANS:
        return 'Todo poderoso timão';

      case Teams.PALMEIRAS:
        return 'Nunca vi um título';

      default:
        return 'I\'m a default';
      }

    });

    expect(Teams.CORINTHIANS.toString()).toEqual('Todo poderoso timão');
    expect(Teams.PALMEIRAS.toString()).toEqual('Nunca vi um título');
    expect(Teams.SANTOS.toString()).toEqual('I\'m a default');
    expect(Teams.SAO_PAULO.toString()).toEqual('I\'m a default');
  });

  it("should .freeze() the enum properties when Object.freeze() is available", function () {

    var myEnum = new Enum(['FIRST', 'SECOND']);

    var firstReference = myEnum.FIRST;
    var secondReference = myEnum.SECOND;

    myEnum.FIRST = 1;
    myEnum.SECOND = 2;

    expect(myEnum.FIRST).toBe(firstReference);
    expect(myEnum.SECOND).toBe(secondReference);
  });

  it("should forgo Object.freeze() usage if it's not available", function () {

    Object.freeze = undefined;

    var myEnum = new Enum(['FIRST', 'SECOND']);

    myEnum.FIRST = 1;
    myEnum.SECOND = 2;

    expect(myEnum.FIRST).toBe(1);
    expect(myEnum.SECOND).toBe(2);
  });
});