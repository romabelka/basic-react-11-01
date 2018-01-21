export const compose = (target, ...objects) => {
    let composed = class extends target {
        constructor() {
            super(...arguments);      
        }
    };
    
    Object.assign(composed.prototype, objects.reduce((memo, obj) => {
        let props = Object.getOwnPropertyNames(obj.prototype).slice(1);
        memo = Object.assign(memo, props.reduce((res, prop) => {
            res[prop] = obj.prototype[prop];
            return res;
        }, {}));
        return memo;
    }, {}));
    
    return composed;
};