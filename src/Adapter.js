"use strict";
exports.__esModule = true;
var WXAdapterImpl_1 = require("./WXAdapterImpl");
var Adapter = /** @class */ (function () {
    function Adapter() {
        // 默认适配微信请求服务
        this.adapter = new WXAdapterImpl_1.WXAdapterImpl();
    }
    /**
     * get方法
     */
    Adapter.prototype.get = function () {
        return this.adapter.get();
    };
    /**
     * request
     */
    Adapter.prototype.request = function (config) {
        return this.adapter.request(config);
    };
    /**
     * 设置适配器
     * @param adapter
     */
    Adapter.prototype.setAdapter = function (adapter) {
        this.adapter = adapter;
    };
    return Adapter;
}());
exports.Adapter = Adapter;
