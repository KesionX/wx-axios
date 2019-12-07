"use strict";
exports.__esModule = true;
var WXCancelImpl = /** @class */ (function () {
    function WXCancelImpl(request) {
        this.request = request;
    }
    WXCancelImpl.prototype.cancel = function () {
        this.request.abort();
    };
    return WXCancelImpl;
}());
exports.WXCancelImpl = WXCancelImpl;
