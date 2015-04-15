var Person = function () { };

Person.prototype.helloSomeone = function (toGreet) {
    return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello = function () {
    return "Hello";
};
