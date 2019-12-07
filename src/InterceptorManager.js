"use strict";
exports.__esModule = true;
var Util_1 = require("./Util");
var InterceptorManager = /** @class */ (function () {
    function InterceptorManager() {
        this.handlers = [];
    }
    InterceptorManager.prototype.use = function (fulfilled, rejected) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected
        });
        return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function (id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    };
    InterceptorManager.prototype.runEach = function (fn) {
        Util_1.Util.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
                fn(h);
            }
        });
    };
    return InterceptorManager;
}());
exports.InterceptorManager = InterceptorManager;
