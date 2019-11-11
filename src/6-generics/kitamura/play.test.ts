import { play, Cat, CatAware } from "./play";

class CatPerson implements CatAware {
  cat: Cat;
  constructor(cat: Cat) {
    this.cat = cat;
  }
}

describe("play()", () => {
  test("with CatPerson", () => {
    const cat = new Cat();
    const person = new CatPerson(cat);
    const result = play<CatPerson>(person);
    expect(result).toEqual("にゃんにゃんしてるにゃん");
  });
});
