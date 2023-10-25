export function escapar() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = metodoOriginal.apply(this, args);
            if (typeof retorno === "string") {
                retorno.replace(/<script>[\s\S]*?<\/script>/, "");
            }
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=escape.js.map