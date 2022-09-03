import { Adapter } from './Adapter';
import { Config } from './Config';
export declare class DispatchRequest {
    constructor(mAdapter: Adapter);
    dispatchRequest(config: Config): Promise<object>;
}
