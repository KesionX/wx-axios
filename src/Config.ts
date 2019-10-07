import { CancelInterface } from './CancelInterface';

/**
 * 配置请求类声明
 */
export class Config {
    url: string | null;
    method: string | null;
    baseUrl: string | null;
    headers: any | null;
    params: any | null;
    data: any | null;
    
    // onRequest 监听request生成时
    onRequest: ((request: any) => void) | null;
    // cancel
    cancelToken: ((cancelFn: CancelInterface) => void) | null;

    constructor() {
        this.url = null;
        this.method = null;
        this.baseUrl = null;
        this.headers = {};
        this.params = {};
        this.data = {};
        this.onRequest = null;
        this.cancelToken = null;
    }
}