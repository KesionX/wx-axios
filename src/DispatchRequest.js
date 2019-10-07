"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adapter;
var DispatchRequest = (function () {
    function DispatchRequest(mAdapter) {
        adapter = mAdapter;
    }
    DispatchRequest.prototype.dispatchRequest = function (config) {
        return adapter.request(config).then(function onResolution(response) {
            response.config = config;
            response.status = response.statusCode;
            return response;
        }, function onRejection(reason) {
            reason.config = config;
            return reason;
        });
    };
    return DispatchRequest;
}());
exports.DispatchRequest = DispatchRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzcGF0Y2hSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGlzcGF0Y2hSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsSUFBSSxPQUFnQixDQUFDO0FBRXJCO0lBRUkseUJBQVksUUFBaUI7UUFDekIsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU0seUNBQWUsR0FBdEIsVUFBdUIsTUFBYztRQUNqQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsWUFBWSxDQUFDLFFBQWE7WUFDbkUsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDekIsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBRXRDLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxTQUFTLFdBQVcsQ0FBQyxNQUFNO1lBQzFCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXZCLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQWRhcHRlciB9IGZyb20gJy4vQWRhcHRlcic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL0NvbmZpZyc7XG5cbmxldCBhZGFwdGVyOiBBZGFwdGVyO1xuXG5leHBvcnQgY2xhc3MgRGlzcGF0Y2hSZXF1ZXN0IHtcblxuICAgIGNvbnN0cnVjdG9yKG1BZGFwdGVyOiBBZGFwdGVyKSB7XG4gICAgICAgIGFkYXB0ZXIgPSBtQWRhcHRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZzogQ29uZmlnKSA6IFByb21pc2U8T2JqZWN0PiB7XG4gICAgICAgIHJldHVybiBhZGFwdGVyLnJlcXVlc3QoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uUmVzb2x1dGlvbihyZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICByZXNwb25zZS5jb25maWcgPSBjb25maWc7XG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgICAgICAgICAgLy8gZGF0YSBjb29raWVzIGhlYWRlciBzdGF0dXNDb2RlXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0sIGZ1bmN0aW9uIG9uUmVqZWN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgcmVhc29uLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgICAgIC8vIHtlcnJNc2c6IFwicmVxdWVzdDpmYWlsXCJ9XG4gICAgICAgICAgICByZXR1cm4gcmVhc29uO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19