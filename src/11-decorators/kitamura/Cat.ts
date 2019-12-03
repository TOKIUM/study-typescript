function sealed(ctor: Function): void {
  Object.seal(ctor);
  Object.seal(ctor.prototype);
}

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
): T {
  return class extends constructor {
    newProperty = "new property";
    color = "白ねこにゃんこ";
  };
}

@classDecorator
@sealed
export default class Cat {
  color = "くろねこ";
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
