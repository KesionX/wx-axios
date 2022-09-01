import { Util } from './Util';
import { WXCancelImpl } from './WXCancelImpl';
export class WXAdapterImpl {
    constructor() {
        this.wxr = wx['request'];
        this.wxr = function (obj) {
            obj = obj || {};
            return new Promise((resolve, reject) => {
                obj.success = resolve;
                obj.fail = reject;
                let request = wx['request'](obj);
                if (obj.onRequest) {
                    obj.onRequest(request);
                }
                if (obj.cancelToken) {
                    let cancelImpl = new WXCancelImpl(request);
                    obj.cancelToken(cancelImpl);
                }
            });
        };
    }
    get() {
        return null;
    }
    post() {
        return null;
    }
    request(config) {
        let url = '';
        if (config.baseUrl) {
            url = url + config.baseUrl;
        }
        if (config.url) {
            url = url + config.url;
        }
        let data = Util.merge(config.params, config.data);
        let header = {};
        if (config.headers) {
            header = config.headers;
        }
        let mconfig = {
            url: url,
            method: config.method,
            data: data,
            header: header,
            onRequest: config.onRequest,
            cancelToken: config.cancelToken
        };
        return this.wxr(mconfig);
    }
}
