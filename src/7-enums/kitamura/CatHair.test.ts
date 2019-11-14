import CatHair from "./CatHair";

class Cat {
  constructor(public hairColor: CatHair) {}
}

describe("CatHair", () => {
  test("白猫にゃんこ", () => {
    const whiteCat = new Cat(CatHair.White);
    expect(whiteCat.hairColor).toBe(CatHair.White);
  });

  test("黒猫にゃんこ", () => {
    const blackCat = new Cat(CatHair.Black);
    expect(blackCat.hairColor).toBe(CatHair.Black);
  });
});
