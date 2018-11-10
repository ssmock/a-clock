"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.getNow = function () {
        return "Now is " + new Date().getTime();
    };
    return Clock;
}());
exports.default = Clock;
