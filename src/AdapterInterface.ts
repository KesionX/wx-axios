import { Config } from './Config';

export interface AdapterInterface {
    /**
     * get请求
     */
    get() : Promise<Object> | null;
    
    /**
     * post请求
     */
    post() : Promise<Object> | null;

    request(config: Config): Promise<Object>;
}