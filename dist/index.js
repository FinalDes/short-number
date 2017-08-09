"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var re = /^-?[0-9]+$/;
function shortNumber(value) {
    value = value.toString();
    if (value.match(re)) {
        return value.toString();
    }
    else {
        return false;
    }
}
exports.default = shortNumber;
