import { AdapterInterface } from './AdapterInterface';
import { Config } from './Config';
import { Util } from './Util';
import { WXCancelImpl } from './WXCancelImpl';

export class WXAdapterImpl implements AdapterInterface {
    wxr: any;
    constructor() {
        this.wxr = wx['request'];
        this.wxr = function(obj: any) {
            obj = obj || {};
            return new Promise((resolve: any, reject: any) => {
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

    public get() : Promise<Object> | null {
        return null;
    }

    public post() : Promise<Object> | null {
        return null;
    }

    // TODO
    public request(config: Config): Promise<Object> {
        let url = '';
        if (config.baseUrl) {
            url = url + config.baseUrl;
        }
        if (config.url) {
            url = url + config.url;
        }
        
        let data = Util.merge(config.params, config.data);
        let header = {}
        if (config.headers) {
            header =  config.headers;
        }
        let mconfig = {
            url: url,
            method: config.method,
            data: data,
            header: header,
            onRequest: config.onRequest,
            cancelToken: config.cancelToken
        }

        return this.wxr(mconfig);
    }
}