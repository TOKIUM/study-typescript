function sealed(constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

function catDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    name = 'おめかしCat';
  }
}

@sealed
@catDecorator
export default class SealedCat {
  name: string;
  feeling: string;

  constructor(name: string) {
    this.name = name;
    this.feeling = '最高だにゃん!';
  }

  forgetFeeling(): void {
    delete this.feeling;
  }
}
