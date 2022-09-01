import { Adapter } from './Adapter';
import { BaseConfig } from './BaseConfig';
export class Default extends BaseConfig {
    constructor() {
        super();
        this.adapter = new Adapter();
    }
}
