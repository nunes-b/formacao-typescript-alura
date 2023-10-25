export function escapar() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      const retorno = metodoOriginal.apply(this, args);
      if (typeof retorno === "string") {
        // console.log(
        //   `@escape em ação na classe ${this.constructor.name}
        //   para o metodo ${propertyKey}`
        // );
        retorno.replace(/<script>[\s\S]*?<\/script>/, "");
      }
      return retorno;
    };

    return descriptor;
  };
}
