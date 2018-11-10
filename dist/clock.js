"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.tellTime = function () {
        return "It is now " + new Date().getTime();
    };
    return Clock;
}());
exports.Clock = Clock;
