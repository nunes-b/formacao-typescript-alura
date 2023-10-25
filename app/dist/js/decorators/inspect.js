export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Metodo: ${propertyKey} ---`);
        console.log(`----- Parametros: ${JSON.stringify(args)} ---`);
        const response = metodoOriginal.apply(this, args);
        console.log(`-------- Retorno: ${JSON.stringify(response)} ---`);
        return response;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map