export declare class Util {
    toString: () => string;
    static isArray(val: any): boolean;
    static merge(...obj: any): any;
    static mergeIfNotNull(...obj: any): any;
    static forEach(obj: any, fn: Function): void;
}
