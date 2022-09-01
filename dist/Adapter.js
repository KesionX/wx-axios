import { WXAdapterImpl } from './WXAdapterImpl';
export class Adapter {
    constructor() {
        this.adapter = new WXAdapterImpl();
    }
    get() {
        return this.adapter.get();
    }
    request(config) {
        return this.adapter.request(config);
    }
    setAdapter(adapter) {
        this.adapter = adapter;
    }
}
