import { Default } from './Default';
import { InterceptorManager } from './InterceptorManager';
import { Config } from './Config';
export declare class WXAxios {
    default: Default;
    interceptors: {
        request: InterceptorManager | null;
        response: InterceptorManager | null;
    };
    private dr;
    constructor();
    private requestWork;
    init(baseUrl: string): void;
    get(url?: string, config?: Config): Promise<object>;
    delete(url?: string, config?: Config): Promise<object>;
    head(url?: string, config?: Config): Promise<object>;
    options(url?: string, config?: Config): Promise<object>;
    post(url?: string, data?: object, config?: Config): Promise<object>;
    put(url?: string, data?: object, config?: Config): Promise<object>;
    request(config?: Config): Promise<object>;
}
