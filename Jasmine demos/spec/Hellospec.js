describe("Hello world", function () {
    it("Test 1", function () {
        expect(helloWorld()).toEqual("Welcome to ADP");
    });
});

describe("hello 2", function () {
    it("Test 2", function () {
        expect(helloWorld()).toContain("ADP");
    });
});


//// CUSTOM MATCHER

//describe('Hello world', function () {


//    // Setup and teardown

//    // afterEach(...) to run after each spec

//    // beforeEach is like to intialize variable before test starts......
//    beforeEach(function () {
//        this.addMatchers({
//            toBeDivisibleByTwo: function () {
//                return (this.actual % 2) === 0;
//            }
//        });
//    });

//    it('is divisible by 2', function () {
//        expect(GiveANumber()).toBeDivisibleByTwo();
//    });

//});


////SPY

////spying on an existing function that you don't touch, with spyOn()

////make sure it calls the sayHello() function when we call the helloSomeone() function ... see person.js

//describe("Person", function () {
//    it("calls the sayHello() function", function () {
//        var fakePerson = new Person();
//        spyOn(fakePerson, "sayHello");
//        fakePerson.helloSomeone("world");
//        expect(fakePerson.sayHello).toHaveBeenCalled();
//    });
//});


//describe("Person", function () {
//    it("greets the world", function () {
//        var fakePerson = new Person();
//        spyOn(fakePerson, "helloSomeone");
//        fakePerson.helloSomeone("world");
//        expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
//    });
//});


//// Asynchronous stuff
////asynchronicity: run() and waitsFor().

//describe("Async testing with Jasmine", function () {
//it("is a test of run()", function () {

//    runs(function () {
//        var foo = 1;
//        expect(foo).toEqual(1);
//    });

//    runs(function () {
//        var bar = 2;
//        bar++;
//        expect(bar).toEqual(3);
//    });

//});
//});


//// will not work
////describe("Calculator", function () {
////    it("should factor two huge numbers asynchronously", function () {
////        var calc = new Calculator();
////        var answer = calc.factor(18973547201226, 28460320801839);
////        expect(answer).toEqual(9486773600613);  // DANGER ZONE: This doesn't work if factor() is asynchronous!!
////        // THIS DOESN'T WORK, STUPID
////    });
////});


////use waitsFor(). waitsFor() waits for some condition to be true,
////and then it continues on. You can also specify an optional timeout;
////if it waits for longer than that, it'll fail with an optional message. 

////describe("Calculator", function () {

////    it("should factor two huge numbers asynchronously", function () {

////        var calc = new Calculator();
////        var answer = calc.factor(18973547201226, 28460320801839);

////        waitsFor(function () {
////            return calc.answerHasBeenCalculated();
////        }, "It took too long to find those factors.", 10000);

////        runs(function () {
////            expect(answer).toEqual(9486773600613);
////        });

////    });

////});
