import { Adapter } from './Adapter';
import { BaseConfig } from './BaseConfig';

/**
 * 默认设置
 */
export class Default extends BaseConfig {
    adapter: Adapter;

    constructor() {
        super();
        this.adapter = new Adapter();
    }
}