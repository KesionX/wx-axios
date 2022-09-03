import { CancelInterface } from './CancelInterface';
export declare class WXCancelImpl implements CancelInterface {
    request: any;
    constructor(request: any);
    cancel(): void;
}
