"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WXCancelImpl = (function () {
    function WXCancelImpl(request) {
        this.request = request;
    }
    WXCancelImpl.prototype.cancel = function () {
        this.request.abort();
    };
    return WXCancelImpl;
}());
exports.WXCancelImpl = WXCancelImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV1hDYW5jZWxJbXBsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV1hDYW5jZWxJbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFJSSxzQkFBWSxPQUFZO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuY2VsSW50ZXJmYWNlIH0gZnJvbSAnLi9DYW5jZWxJbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgV1hDYW5jZWxJbXBsIGltcGxlbWVudHMgQ2FuY2VsSW50ZXJmYWNlIHtcblxuICAgIHJlcXVlc3Q6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3Q6IGFueSkge1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIH1cblxuICAgIGNhbmNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0LmFib3J0KCk7XG4gICAgfVxuXG59Il19