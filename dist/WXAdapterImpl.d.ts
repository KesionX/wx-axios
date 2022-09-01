import { AdapterInterface } from './AdapterInterface';
import { Config } from './Config';
export declare class WXAdapterImpl implements AdapterInterface {
    wxr: any;
    constructor();
    get(): Promise<object> | null;
    post(): Promise<object> | null;
    request(config: Config): Promise<object>;
}
