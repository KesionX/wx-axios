import { AdapterInterface } from './AdapterInterface';
import { Config } from './Config';
export declare class Adapter {
    private adapter;
    constructor();
    get(): Promise<object> | null;
    request(config: Config): Promise<object>;
    setAdapter(adapter: AdapterInterface): void;
}
