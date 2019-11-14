import CatFood from "./CatFood";

class Cat {
  constructor(private name: string) {}
  eat(food: CatFood): string {
    return `${food}を食べてるにゃん`;
  }
}

describe("CatFood", () => {
  const cat = new Cat("ぬこ様");

  test("ささみをあげる", () => {
    expect(cat.eat(CatFood.Sasami)).toEqual("ささみを食べてるにゃん");
  });

  test("ちゅ～るをあげる", () => {
    expect(cat.eat(CatFood.CiaoChuru)).toEqual("ちゅ～るを食べてるにゃん");
  });
});
