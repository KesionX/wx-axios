import { AdapterInterface } from './AdapterInterface';
import { WXAdapterImpl } from './WXAdapterImpl';
import { Config } from './Config';

export class Adapter {
    private adapter: AdapterInterface;
    constructor() {
        // 默认适配微信请求服务
        this.adapter = new WXAdapterImpl();
    }

    /**
     * get方法
     */
    public get() : Promise<Object> | null {
        return this.adapter.get();
    }

    /**
     * request
     */
    public request(config: Config): Promise<Object> {
        return this.adapter.request(config);
    }

    /**
     * 设置适配器
     * @param adapter 
     */
    public setAdapter(adapter: AdapterInterface) {
        this.adapter = adapter;
    }
}