import { Default } from './Default';
import { Util } from './Util';
import { InterceptorManager } from './InterceptorManager';
import { DispatchRequest } from './DispatchRequest';
export class WXAxios {
    constructor() {
        this.default = new Default();
        this.dr = new DispatchRequest(this.default.adapter);
        let requestInterceptor = new InterceptorManager();
        let responseInterceptor = new InterceptorManager();
        this.interceptors = {
            request: requestInterceptor,
            response: responseInterceptor
        };
    }
    requestWork(config) {
        let p = Promise.resolve(config);
        let chain;
        chain = new Array();
        chain.push(this.dr.dispatchRequest);
        chain.push(undefined);
        if (this.interceptors.request) {
            this.interceptors.request.runEach(function unshiftRequestInterceptors(interceptor) {
                chain.unshift(interceptor.fulfilled, interceptor.rejected);
            });
        }
        if (this.interceptors.response) {
            this.interceptors.response.runEach(function pushResponseInterceptors(interceptor) {
                chain.push(interceptor.fulfilled, interceptor.rejected);
            });
        }
        while (chain.length) {
            p = p.then(chain.shift(), chain.shift());
        }
        return p;
    }
    init(baseUrl) {
        this.default.baseUrl = baseUrl;
    }
    get(url, config) {
        let mConfig;
        mConfig = Util.mergeIfNotNull(this.default, config, { url: url });
        mConfig.method = 'GET';
        return this.requestWork(mConfig);
    }
    delete(url, config) {
        let mConfig;
        mConfig = Util.mergeIfNotNull(this.default, config, { url: url });
        mConfig.method = 'DELETE';
        return this.requestWork(mConfig);
    }
    head(url, config) {
        let mConfig;
        mConfig = Util.mergeIfNotNull(this.default, config, { url: url });
        mConfig.method = 'HEAD';
        return this.requestWork(mConfig);
    }
    options(url, config) {
        let mConfig;
        mConfig = Util.mergeIfNotNull(this.default, config, { url: url });
        mConfig.method = 'OPTIONS';
        return this.requestWork(mConfig);
    }
    post(url, data, config) {
        let mConfig;
        mConfig = Util.mergeIfNotNull(this.default, config, { url: url }, { data: data });
        mConfig.method = 'POST';
        return this.requestWork(mConfig);
    }
    put(url, data, config) {
        let mConfig;
        mConfig = Util.mergeIfNotNull(this.default, config, { url: url }, { data: data });
        mConfig.method = 'PUT';
        return this.requestWork(mConfig);
    }
    request(config) {
        let mConfig;
        mConfig = Util.mergeIfNotNull(this.default, config);
        if (mConfig.method) {
            mConfig.method = mConfig.method.toUpperCase();
        }
        return this.requestWork(mConfig);
    }
}
