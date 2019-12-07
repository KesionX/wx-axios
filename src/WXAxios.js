"use strict";
exports.__esModule = true;
var Default_1 = require("./Default");
var Util_1 = require("./Util");
var InterceptorManager_1 = require("./InterceptorManager");
var DispatchRequest_1 = require("./DispatchRequest");
/**
 * config配置执行顺序 default < user config < interceptor
 * TODO: 上传, 下载， url解析
 */
var WXAxios = /** @class */ (function () {
    function WXAxios() {
        this["default"] = new Default_1.Default();
        this.dr = new DispatchRequest_1.DispatchRequest(this["default"].adapter);
        var requestInterceptor = new InterceptorManager_1.InterceptorManager();
        var responseInterceptor = new InterceptorManager_1.InterceptorManager();
        this.interceptors = {
            request: requestInterceptor,
            response: responseInterceptor
        };
    }
    WXAxios.prototype.requestWork = function (config) {
        var p = Promise.resolve(config);
        var chain;
        chain = new Array();
        chain.push(this.dr.dispatchRequest);
        chain.push(undefined);
        if (this.interceptors.request) {
            this.interceptors.request.runEach(function unshiftRequestInterceptors(interceptor) {
                chain.unshift(interceptor.fulfilled, interceptor.rejected);
            });
        }
        if (this.interceptors.response) {
            this.interceptors.response.runEach(function pushResponseInterceptors(interceptor) {
                chain.push(interceptor.fulfilled, interceptor.rejected);
            });
        }
        while (chain.length) {
            p = p.then(chain.shift(), chain.shift());
        }
        return p;
    };
    WXAxios.prototype.init = function (baseUrl) {
        this["default"].baseUrl = baseUrl;
    };
    /**
     * get
     * @param url
     * @param config
     */
    WXAxios.prototype.get = function (url, config) {
        var mConfig;
        mConfig = Util_1.Util.mergeIfNotNull(this["default"], config, { url: url });
        mConfig.method = 'GET';
        return this.requestWork(mConfig);
    };
    /**
     * delete
     * @param url
     * @param config
     */
    WXAxios.prototype["delete"] = function (url, config) {
        var mConfig;
        mConfig = Util_1.Util.mergeIfNotNull(this["default"], config, { url: url });
        mConfig.method = 'DELETE';
        return this.requestWork(mConfig);
    };
    /**
     * head
     * @param url
     * @param config
     */
    WXAxios.prototype.head = function (url, config) {
        var mConfig;
        mConfig = Util_1.Util.mergeIfNotNull(this["default"], config, { url: url });
        mConfig.method = 'HEAD';
        return this.requestWork(mConfig);
    };
    /**
     * options
     * @param url
     * @param config
     */
    WXAxios.prototype.options = function (url, config) {
        var mConfig;
        mConfig = Util_1.Util.mergeIfNotNull(this["default"], config, { url: url });
        mConfig.method = 'OPTIONS';
        return this.requestWork(mConfig);
    };
    /**
     * post
     * @param url
     * @param data
     * @param config
     */
    WXAxios.prototype.post = function (url, data, config) {
        var mConfig;
        mConfig = Util_1.Util.mergeIfNotNull(this["default"], config, { url: url }, { data: data });
        mConfig.method = 'POST';
        return this.requestWork(mConfig);
    };
    /**
     * put
     * @param url
     * @param data
     * @param config
     */
    WXAxios.prototype.put = function (url, data, config) {
        var mConfig;
        mConfig = Util_1.Util.mergeIfNotNull(this["default"], config, { url: url }, { data: data });
        mConfig.method = 'PUT';
        return this.requestWork(mConfig);
    };
    /**
     * request
     * @param config
     */
    WXAxios.prototype.request = function (config) {
        var mConfig;
        mConfig = Util_1.Util.mergeIfNotNull(this["default"], config);
        if (mConfig.method) {
            mConfig.method = mConfig.method.toUpperCase();
        }
        return this.requestWork(mConfig);
    };
    return WXAxios;
}());
exports.WXAxios = WXAxios;
