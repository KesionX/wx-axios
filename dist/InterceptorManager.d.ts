import { Config } from './Config';
export declare class InterceptorManager {
    handlers: Array<object | null>;
    constructor();
    use(fulfilled: ((config: Config) => object), rejected: Function): number;
    eject(id: number): void;
    runEach(fn: Function): void;
}
