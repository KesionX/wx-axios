import { Config } from './Config';

/**
 * 默认用户请求配置
 */
export class BaseConfig extends Config {
    constructor() {
        super();
        this.method = 'GET';
        if (this.headers) {
            this.headers['content-type'] = 'application/json';
        }
    }
}
