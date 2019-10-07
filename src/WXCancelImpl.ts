import { CancelInterface } from './CancelInterface';

export class WXCancelImpl implements CancelInterface {

    request: any;

    constructor(request: any) {
        this.request = request;
    }

    cancel(): void {
        this.request.abort();
    }

}