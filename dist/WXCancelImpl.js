export class WXCancelImpl {
    constructor(request) {
        this.request = request;
    }
    cancel() {
        this.request.abort();
    }
}
