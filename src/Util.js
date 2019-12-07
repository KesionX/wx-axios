"use strict";
exports.__esModule = true;
var Util = /** @class */ (function () {
    function Util() {
        this.toString = Object.prototype.toString;
    }
    Util.isArray = function (val) {
        return toString.call(val) === '[object Array]';
    };
    Util.merge = function () {
        var obj = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            obj[_i] = arguments[_i];
        }
        var result;
        result = {};
        function assignValue(val, key) {
            if (typeof result[key] === 'object' && typeof val === 'object') {
                result[key] = Util.merge(result[key], val);
            }
            else {
                result[key] = val;
            }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
            Util.forEach(arguments[i], assignValue);
        }
        return result;
    };
    Util.mergeIfNotNull = function () {
        var obj = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            obj[_i] = arguments[_i];
        }
        var result;
        result = {};
        function assignValue(val, key) {
            if (typeof result[key] === 'object' && typeof val === 'object') {
                result[key] = Util.mergeIfNotNull(result[key], val);
            }
            else {
                // 非object需注意值覆盖问题
                if (val || val === 0) {
                    result[key] = val;
                }
            }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
            Util.forEach(arguments[i], assignValue);
        }
        return result;
    };
    Util.forEach = function (obj, fn) {
        if (obj === null || typeof obj === 'undefined') {
            return;
        }
        if (typeof obj !== 'object') {
            obj = [obj];
        }
        if (Util.isArray(obj)) {
            for (var i = 0, l = obj.length; i < l; i++) {
                fn.call(null, obj[i], i, obj);
            }
        }
        else {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    fn.call(null, obj[key], key, obj);
                }
            }
        }
    };
    return Util;
}());
exports.Util = Util;
