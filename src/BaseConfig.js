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
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("./Config");
var BaseConfig = (function (_super) {
    __extends(BaseConfig, _super);
    function BaseConfig() {
        var _this = _super.call(this) || this;
        _this.method = 'GET';
        if (_this.headers) {
            _this.headers['content-type'] = 'application/json';
        }
        return _this;
    }
    return BaseConfig;
}(Config_1.Config));
exports.BaseConfig = BaseConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJhc2VDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWtDO0FBS2xDO0lBQWdDLDhCQUFNO0lBQ2xDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSkcsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztTQUNyRDs7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBZ0MsZUFBTSxHQVFyQztBQVJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9Db25maWcnO1xuXG4vKipcbiAqIOm7mOiupOeUqOaIt+ivt+axgumFjee9rlxuICovXG5leHBvcnQgY2xhc3MgQmFzZUNvbmZpZyBleHRlbmRzIENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=