"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Adapter_1 = require("./Adapter");
var BaseConfig_1 = require("./BaseConfig");
/**
 * 默认设置
 */
var Default = /** @class */ (function (_super) {
    __extends(Default, _super);
    function Default() {
        var _this = _super.call(this) || this;
        _this.adapter = new Adapter_1.Adapter();
        return _this;
    }
    return Default;
}(BaseConfig_1.BaseConfig));
exports.Default = Default;
