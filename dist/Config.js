export class Config {
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
