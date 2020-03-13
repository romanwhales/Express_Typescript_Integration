"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var methods_1 = require("./methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(methods_1.Methods.get);
exports.put = routeBinder(methods_1.Methods.put);
exports.post = routeBinder(methods_1.Methods.post);
exports.del = routeBinder(methods_1.Methods.del);
exports.patch = routeBinder(methods_1.Methods.patch);
