export abstract class BObject {
    setJson(obj: any) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    }
}
export function Child(config: {childObject: any, isArray?: boolean}): any {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(propertyKey);
        Object.defineProperty(target, propertyKey, {
            get: function() {
                return this[propertyKey+"child"];
            },
            set: function(val) {
                if (val instanceof BObject) {
                    this[propertyKey+"child"] = val
                } else {
                    if (config.isArray) {
                        var foo = [];
                        val.forEach((b) => {
                            let a = new config.childObject();
                            a.setJson(b);
                            foo.push(a);
                        })
                        this[propertyKey+"child"] = foo;
                    } else {
                    this[propertyKey+"child"] = new config.childObject();
                    this[propertyKey+"child"].setJson(val);
                    }
                }
            }
        })
        console.log("Child: called");
    }
}