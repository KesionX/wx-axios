let adapter;
export class DispatchRequest {
    constructor(mAdapter) {
        adapter = mAdapter;
    }
    dispatchRequest(config) {
        return adapter.request(config).then(function onResolution(response) {
            response.config = config;
            response.status = response.statusCode;
            return response;
        }, function onRejection(reason) {
            reason.config = config;
            return reason;
        });
    }
}
