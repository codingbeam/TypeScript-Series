"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = "Nikhil";
        this.name = name;
    }
    Person.prototype.display = function () {
        return "".concat(this.name);
    };
    return Person;
}());
exports.Person = Person;
