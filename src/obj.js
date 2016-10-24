"use strict";
class BObject {
    setJson(obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    }
}
exports.BObject = BObject;
function Child(config) {
    return function (target, propertyKey, descriptor) {
        console.log(propertyKey);
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[propertyKey + "child"];
            },
            set: function (val) {
                if (val instanceof BObject) {
                    this[propertyKey + "child"] = val;
                }
                else {
                    if (config.isArray) {
                        var foo = [];
                        val.forEach((b) => {
                            let a = new config.childObject();
                            a.setJson(b);
                            foo.push(a);
                        });
                        this[propertyKey + "child"] = foo;
                    }
                    else {
                        this[propertyKey + "child"] = new config.childObject();
                        this[propertyKey + "child"].setJson(val);
                    }
                }
            }
        });
        console.log("Child: called");
    };
}
exports.Child = Child;
