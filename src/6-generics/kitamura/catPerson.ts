export type CatFood = "カリカリ" | "ツナ缶";

export class Cat {
  constructor(public name: string) {}

  eat(food: CatFood): string {
    return `もぐもぐ${food}`;
  }
}

export class CatPerson<T extends Cat> {
  constructor(public cat: T) {}

  feed(food: CatFood): string {
    return this.cat.eat(food);
  }
}
