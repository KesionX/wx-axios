"use strict";
exports.__esModule = true;
var Util_1 = require("./Util");
var WXCancelImpl_1 = require("./WXCancelImpl");
var WXAdapterImpl = /** @class */ (function () {
    function WXAdapterImpl() {
        // @ts-ignore
        this.wxr = wx['request'];
        this.wxr = function (obj) {
            obj = obj || {};
            return new Promise(function (resolve, reject) {
                obj.success = resolve;
                obj.fail = reject;
                // @ts-ignore
                var request = wx['request'](obj);
                if (obj.onRequest) {
                    obj.onRequest(request);
                }
                if (obj.cancelToken) {
                    var cancelImpl = new WXCancelImpl_1.WXCancelImpl(request);
                    obj.cancelToken(cancelImpl);
                }
            });
        };
    }
    WXAdapterImpl.prototype.get = function () {
        return null;
    };
    WXAdapterImpl.prototype.post = function () {
        return null;
    };
    // TODO
    WXAdapterImpl.prototype.request = function (config) {
        var url = '';
        if (config.baseUrl) {
            url = url + config.baseUrl;
        }
        if (config.url) {
            url = url + config.url;
        }
        var data = Util_1.Util.merge(config.params, config.data);
        var header = {};
        if (config.headers) {
            header = config.headers;
        }
        var mconfig = {
            url: url,
            method: config.method,
            data: data,
            header: header,
            onRequest: config.onRequest,
            cancelToken: config.cancelToken
        };
        return this.wxr(mconfig);
    };
    return WXAdapterImpl;
}());
exports.WXAdapterImpl = WXAdapterImpl;
