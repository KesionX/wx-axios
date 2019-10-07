import { Util } from './Util';
import { Config } from './Config';

export class InterceptorManager {
    // 拦截处理器
    handlers: Array<object | null>;

    constructor() {
        this.handlers = [];
    }

    public use(fulfilled: ((config: Config) => object), rejected: Function) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected
        });
        return this.handlers.length - 1;
    }

    public eject(id: number) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }

    public runEach(fn: Function) {
        Util.forEach(this.handlers, function forEachHandler(h: object) {
            if (h !== null) {
                fn(h);
            }
        });
    }

}