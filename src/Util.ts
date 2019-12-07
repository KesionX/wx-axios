
export class Util {
    toString = Object.prototype.toString;

    public static isArray(val: any) {
        return toString.call(val) === '[object Array]';
    }

    public static merge(...obj: any) {
        let result: any;
        result = {};
        function assignValue(val: any, key: any) {
            if (typeof result[key] === 'object' && typeof val === 'object') {
                result[key] = Util.merge(result[key], val);
            } else {
                result[key] = val;
            }
        }
      
        for (var i = 0, l = arguments.length; i < l; i++) {
            Util.forEach(arguments[i], assignValue);
        }
        return result;
    }

    public static mergeIfNotNull(...obj: any) {
        let result: any;
        result = {};
        function assignValue(val: any, key: any) {
            if (typeof result[key] === 'object' && typeof val === 'object') {
                result[key] = Util.mergeIfNotNull(result[key], val);
            } else {
                // 非object需注意值覆盖问题
               	if(val || val === 0) {
		   result[key] = val;
		}
                
            }
        }
      
        for (var i = 0, l = arguments.length; i < l; i++) {
            Util.forEach(arguments[i], assignValue);
        }
        return result;
    }
    
    public static forEach(obj: any, fn: Function) {
        if (obj === null || typeof obj === 'undefined') {
            return;
        }

        if (typeof obj !== 'object') {
            obj = [obj];
        }
      
        if (Util.isArray(obj)) {
            for (var i = 0, l = obj.length; i < l; i++) {
                fn.call(null, obj[i], i, obj);
            }
        } else {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    fn.call(null, obj[key], key, obj);
                }
            }
        }
    }
    
}


  
