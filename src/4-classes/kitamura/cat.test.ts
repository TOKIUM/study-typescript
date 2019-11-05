import Cat from "./cat";

describe("Cat", () => {
  test("#greet", () => {
    const cat = new Cat;
    expect(cat.greet()).toEqual("にゃーん");
  });
  test("#play", () => {
    const cat = new Cat;
    expect(cat.play("ひも")).toEqual("ひも うっはww ワロタwwww");
  });
  test("#eat", () => {
    const cat = new Cat;
    expect(cat.eat("ねぎ")).toEqual("ねぎ うまwwww")
  });
  test("#sleep", () => {
    const cat = new Cat;
    expect(cat.sleep(30)).toEqual("HPが30回復した！")
  });
})
