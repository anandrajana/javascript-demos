describe("Stock Portfolio App Tests", function () {
    it("calcSideFundInterest() should return a value that is greater than the supplied fund value.", function () {
        var calcSideFundInterest = function (fundValue, dailyInt, period) {
            return fundValue * (dailyInt * period);
        };

        var fundValue = 1000,
            dailyInt = 0.00356,
            period = 7;

        var result = calcSideFundInterest(fundValue, dailyInt, period);

        expect(result).toBeGreaterThan(fundValue);
    });
});


describe("Stock Portfolio App Tests", function () {
    it("calcWeeklyPercentChange() should return the change between two numbers as a percentage.", function () {
        var calcWeeklyPercentChange = function (presentValue, previousValue, aPercentChanges) {
            var percentChange = presentValue / previousValue - 1;
            aPercentChanges.push(percentChange);
            return percentChange;
        };
        var presentValue = 110,
            previousValue = 100,
            aPercentChanges = [];
        //actually returns 0.10000000000000009!
        var result = calcWeeklyPercentChange(presentValue, previousValue, aPercentChanges);
        expect(result).toBeCloseTo(0.1);
    });
});


// Setup and teardown

describe("Stock Portfolio App Tests", function() {
    var presentValue, 
        previousValue, 
        aPercentChanges;
    //setup 
    beforeEach(function() {
        presentValue    = 110; 
        previousValue   = 100; 
        aPercentChanges = [];
    });
    //teardown
    afterEach(function() {
        presentValue    = 0;
        previousValue   = 0; 
        aPercentChanges = [];
    });

    it("calcWeeklyPercentChange() should return the change between two numbers as a percentage.", function () {
        var calcWeeklyPercentChange = function (presentValue, previousValue, aPercentChanges) {
            var percentChange = presentValue / previousValue - 1;
            aPercentChanges.push(percentChange);
            return percentChange;
        };

        //actually returns 0.10000000000000009!
        var result = calcWeeklyPercentChange(presentValue, previousValue, aPercentChanges);
        expect(result).toBeCloseTo(0.1);
        expect(aPercentChanges.length).toEqual(1);
    });

    it("The aPercentChanges array should now be empty.", function () {
        expect(aPercentChanges.length).toEqual(0);
    });
});

