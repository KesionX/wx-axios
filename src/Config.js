"use strict";
exports.__esModule = true;
/**
 * 配置请求类声明
 */
var Config = /** @class */ (function () {
    function Config() {
        this.url = null;
        this.method = null;
        this.baseUrl = null;
        this.headers = {};
        this.params = {};
        this.data = {};
        this.onRequest = null;
        this.cancelToken = null;
    }
    return Config;
}());
exports.Config = Config;
