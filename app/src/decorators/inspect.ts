export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`--- Metodo: ${propertyKey} ---`);
    console.log(`----- Parametros: ${JSON.stringify(args)} ---`);
    const response = metodoOriginal.apply(this, args);
    console.log(`-------- Retorno: ${JSON.stringify(response)} ---`);
    return response;
  };

  return descriptor;
}
