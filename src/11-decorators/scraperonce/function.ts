export const Appendable = (after: string): Function => {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    return {
      value: (): string => descriptor.value() + after
    };
  }
}

export class Animal {
  say():string {
    return '・・・';
  }
}

export class Cat extends Animal {
  @Appendable('にゃん')
  say():string {
    return super.say();
  }
}

export class Doggo extends Animal {
  @Appendable('わん')
  say():string {
    return super.say();
  }
}
