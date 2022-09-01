export class Util {
    constructor() {
        this.toString = Object.prototype.toString;
    }
    static isArray(val) {
        return Util.toString.call(val) === "[object Array]";
    }
    static merge(...obj) {
        let result;
        result = {};
        function assignValue(val, key) {
            if (typeof result[key] === "object" && typeof val === "object") {
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
    }
    static mergeIfNotNull(...obj) {
        let result;
        result = {};
        function assignValue(val, key) {
            if (typeof result[key] === "object" && typeof val === "object") {
                result[key] = Util.mergeIfNotNull(result[key], val);
            }
            else {
                if (val || val === 0) {
                    result[key] = val;
                }
            }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
            Util.forEach(arguments[i], assignValue);
        }
        return result;
    }
    static forEach(obj, fn) {
        if (obj === null || typeof obj === "undefined") {
            return;
        }
        if (typeof obj !== "object") {
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
    }
}
