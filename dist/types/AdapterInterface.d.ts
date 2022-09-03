import { Config } from './Config';
export interface AdapterInterface {
    get(): Promise<object> | null;
    post(): Promise<object> | null;
    request(config: Config): Promise<object>;
}
