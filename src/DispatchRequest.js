"use strict";
exports.__esModule = true;
var adapter;
var DispatchRequest = /** @class */ (function () {
    function DispatchRequest(mAdapter) {
        adapter = mAdapter;
    }
    DispatchRequest.prototype.dispatchRequest = function (config) {
        return adapter.request(config).then(function onResolution(response) {
            response.config = config;
            response.status = response.statusCode;
            // data cookies header statusCode
            return response;
        }, function onRejection(reason) {
            reason.config = config;
            // {errMsg: "request:fail"}
            return reason;
        });
    };
    return DispatchRequest;
}());
exports.DispatchRequest = DispatchRequest;
