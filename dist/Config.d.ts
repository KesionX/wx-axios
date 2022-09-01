import { CancelInterface } from './CancelInterface';
export declare class Config {
    url: string | null;
    method: string | null;
    baseUrl: string | null;
    headers: any | null;
    params: any | null;
    data: any | null;
    onRequest: ((request: any) => void) | null;
    cancelToken: ((cancelFn: CancelInterface) => void) | null;
    constructor();
}
