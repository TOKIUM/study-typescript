type AnimalSayAppendingFunction = { value: () => string };

type AnimalSayDecorator = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => AnimalSayAppendingFunction;

export const Appendable = (after: string): AnimalSayDecorator => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): AnimalSayAppendingFunction => {
    return {
      value: (): string => descriptor.value() + after
    };
  };
};

export class Animal {
  say(): string {
    return "・・・";
  }
}

export class Cat extends Animal {
  @Appendable("にゃん")
  say(): string {
    return super.say();
  }
}

export class Doggo extends Animal {
  @Appendable("わん")
  say(): string {
    return super.say();
  }
}
