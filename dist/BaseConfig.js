import { Config } from './Config';
export class BaseConfig extends Config {
    constructor() {
        super();
        this.method = 'GET';
        if (this.headers) {
            this.headers['content-type'] = 'application/json';
        }
    }
}
