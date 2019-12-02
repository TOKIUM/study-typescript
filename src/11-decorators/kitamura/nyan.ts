export default function nyan(): Function {
  return function(
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): object {
    return {
      value: (): string => descriptor.value.call() + "にゃん"
    };
  };
}
