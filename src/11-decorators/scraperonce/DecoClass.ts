// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor = { new (...args: any[]): {} };

export function SugoiDecorator<T extends Constructor>(constructor: T): T {
  return class extends constructor {
    public sugoi: string | null = "SUGEEE";

    public sugee(): string | null {
      return this.sugoi;
    }
  };
}

export namespace DecoClass {
  export class Animal {
    like: string | null = null;
  }

  @SugoiDecorator
  export class Cat extends Animal {
    public sugoi: string | null = "猫SUGEEE";
    public sugee: Function;
  }

  @SugoiDecorator
  export class Doggo extends Animal {
    public sugoi: string | null = "犬SUGEEE";
    public sugee: Function;
  }
}
