"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("./Util");
var InterceptorManager = (function () {
    function InterceptorManager() {
        this.handlers = [];
    }
    InterceptorManager.prototype.use = function (fulfilled, rejected) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected
        });
        return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function (id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    };
    InterceptorManager.prototype.runEach = function (fn) {
        Util_1.Util.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
                fn(h);
            }
        });
    };
    return InterceptorManager;
}());
exports.InterceptorManager = InterceptorManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW50ZXJjZXB0b3JNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRzlCO0lBSUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sZ0NBQUcsR0FBVixVQUFXLFNBQXVDLEVBQUUsUUFBa0I7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDZixTQUFTLEVBQUUsU0FBUztZQUNwQixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sa0NBQUssR0FBWixVQUFhLEVBQVU7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVNLG9DQUFPLEdBQWQsVUFBZSxFQUFZO1FBQ3ZCLFdBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLGNBQWMsQ0FBQyxDQUFTO1lBQ3pELElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDVDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi9VdGlsJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vQ29uZmlnJztcblxuZXhwb3J0IGNsYXNzIEludGVyY2VwdG9yTWFuYWdlciB7XG4gICAgLy8g5oum5oiq5aSE55CG5ZmoXG4gICAgaGFuZGxlcnM6IEFycmF5PG9iamVjdCB8IG51bGw+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXNlKGZ1bGZpbGxlZDogKChjb25maWc6IENvbmZpZykgPT4gb2JqZWN0KSwgcmVqZWN0ZWQ6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICAgICAgICAgIHJlamVjdGVkOiByZWplY3RlZFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZWplY3QoaWQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBydW5FYWNoKGZuOiBGdW5jdGlvbikge1xuICAgICAgICBVdGlsLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaDogb2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZuKGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=