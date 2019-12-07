
import { Adapter } from './Adapter';
import { Config } from './Config';

let adapter: Adapter;

export class DispatchRequest {

    constructor(mAdapter: Adapter) {
        adapter = mAdapter;
    }

    public dispatchRequest(config: Config) : Promise<object> {
        return adapter.request(config).then(function onResolution(response: any) {
            response.config = config;
            response.status = response.statusCode;
            // data cookies header statusCode
            return response;
        }, function onRejection(reason) {
            reason.config = config;
            // {errMsg: "request:fail"}
            return reason;
        });
    }
}