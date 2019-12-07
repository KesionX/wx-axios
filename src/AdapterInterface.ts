import { Config } from './Config';

export interface AdapterInterface {
    /**
     * get请求
     */
    get() : Promise<object> | null;
    
    /**
     * post请求
     */
    post() : Promise<object> | null;

    request(config: Config): Promise<object>;
}