import { Default } from './Default';
import { Util } from './Util';
import { InterceptorManager } from './InterceptorManager';
import { Config } from './Config';
import { DispatchRequest } from './DispatchRequest';

/**
 * config配置执行顺序 default < user config < interceptor
 * TODO: 上传, 下载， url解析
 */
export class WXAxios {
    public default: Default;
    public interceptors: {
        request: InterceptorManager | null,
        response: InterceptorManager | null
    };
    private dr: DispatchRequest;
    
    constructor() {
        this.default = new Default();
        this.dr = new DispatchRequest(this.default.adapter);
        let requestInterceptor = new InterceptorManager();
        let responseInterceptor = new InterceptorManager();
        this.interceptors = {
            request: requestInterceptor,
            response: responseInterceptor
        }
    }

    private requestWork(config: Config) : Promise<object> {
        let p = Promise.resolve(config);
        let chain : Array<any>;
        chain = new Array();
        chain.push(this.dr.dispatchRequest);
        chain.push(undefined);
        if (this.interceptors.request) {
            this.interceptors.request.runEach(function unshiftRequestInterceptors(interceptor: any) {
                chain.unshift(interceptor.fulfilled, interceptor.rejected);
            });
        }
        if (this.interceptors.response) {
            this.interceptors.response.runEach(function pushResponseInterceptors(interceptor: any) {
                chain.push(interceptor.fulfilled, interceptor.rejected);
            });
        }
        while(chain.length) {
            p = p.then(chain.shift(), chain.shift());
        }
        return p;
    }

    public init(baseUrl: string) : void { 
        this.default.baseUrl = baseUrl;
    }

    /**
     * get
     * @param url 
     * @param config 
     */
    public get(url?: string, config?: Config) : Promise<object> {
        let mConfig : Config;
        mConfig = Util.mergeIfNotNull(this.default, config, {url: url});
        mConfig.method = 'GET';
        return this.requestWork(mConfig);
    }

    /**
     * delete
     * @param url 
     * @param config 
     */
    public delete(url?: string, config?: Config) : Promise<object> {
        let mConfig : Config;
        mConfig = Util.mergeIfNotNull(this.default, config, {url: url});
        mConfig.method = 'DELETE';
        return this.requestWork(mConfig);
    }

    /**
     * head
     * @param url 
     * @param config 
     */
    public head(url?: string, config?: Config) : Promise<object> {
        let mConfig : Config;
        mConfig = Util.mergeIfNotNull(this.default, config, {url: url});
        mConfig.method = 'HEAD';
        return this.requestWork(mConfig);
    }
    
    /**
     * options
     * @param url 
     * @param config 
     */
    public options(url?: string, config?: Config) : Promise<object> {
        let mConfig : Config;
        mConfig = Util.mergeIfNotNull(this.default, config, {url: url});
        mConfig.method = 'OPTIONS';
        return this.requestWork(mConfig);
    }

    /**
     * post
     * @param url 
     * @param data 
     * @param config 
     */
    public post(url?: string, data?: object, config?: Config) : Promise<object> {
        let mConfig : Config;
        mConfig = Util.mergeIfNotNull(this.default, config, {url: url}, {data: data});
        mConfig.method = 'POST';
        return this.requestWork(mConfig);
    }

    /**
     * put
     * @param url 
     * @param data 
     * @param config 
     */
    public put(url?: string, data?: object, config?: Config) : Promise<object> {
        let mConfig : Config;
        mConfig = Util.mergeIfNotNull(this.default, config, {url: url}, {data: data});
        mConfig.method = 'PUT';
        return this.requestWork(mConfig);
    }
    
    /**
     * request
     * @param config 
     */
    public request(config?: Config) : Promise<object> {
        let mConfig : Config;
        mConfig = Util.mergeIfNotNull(this.default, config);
        if (mConfig.method) {
            mConfig.method = mConfig.method.toUpperCase();
        }
        return this.requestWork(mConfig);
    }

}