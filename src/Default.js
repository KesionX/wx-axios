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
var Adapter_1 = require("./Adapter");
var BaseConfig_1 = require("./BaseConfig");
var Default = (function (_super) {
    __extends(Default, _super);
    function Default() {
        var _this = _super.call(this) || this;
        _this.adapter = new Adapter_1.Adapter();
        return _this;
    }
    return Default;
}(BaseConfig_1.BaseConfig));
exports.Default = Default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9DO0FBQ3BDLDJDQUEwQztBQUsxQztJQUE2QiwyQkFBVTtJQUduQztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQURHLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7O0lBQ2pDLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQVBELENBQTZCLHVCQUFVLEdBT3RDO0FBUFksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZGFwdGVyIH0gZnJvbSAnLi9BZGFwdGVyJztcbmltcG9ydCB7IEJhc2VDb25maWcgfSBmcm9tICcuL0Jhc2VDb25maWcnO1xuXG4vKipcbiAqIOm7mOiupOiuvue9rlxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdCBleHRlbmRzIEJhc2VDb25maWcge1xuICAgIGFkYXB0ZXI6IEFkYXB0ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gbmV3IEFkYXB0ZXIoKTtcbiAgICB9XG59Il19