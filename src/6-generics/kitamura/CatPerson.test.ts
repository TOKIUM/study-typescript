import { Cat, CatPerson, CatFood } from "./CatPerson";

class MyCat extends Cat {
  eat(food: CatFood): string {
    return `${food}は美味しくないにゃん`;
  }
}

describe("CatPerson with Cat", () => {
  const cat = new Cat("ぬこ様");
  const catPerson = new CatPerson(cat);

  test("#feed()", () => {
    expect(catPerson.feed("カリカリ")).toEqual("もぐもぐカリカリ");
    expect(catPerson.feed("ツナ缶")).toEqual("もぐもぐツナ缶");
  });
});

describe("CatPerson with MyCat", () => {
  const cat = new MyCat("ぬこ様");
  const catPerson = new CatPerson(cat);

  test("#feed()", () => {
    expect(catPerson.feed("カリカリ")).toEqual("カリカリは美味しくないにゃん");
  });
});
