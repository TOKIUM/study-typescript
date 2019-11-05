import Cat from "./cat";

describe("Cat", () => {
  const name = "たま";

  test("#run", () => {
    const cat = new Cat(name);
    expect(cat.run()).toEqual("たまは走った！");
  })
  test("#greet", () => {
    const cat = new Cat(name);
    expect(cat.greet()).toEqual("にゃーん");
  });
  test("#play", () => {
    const cat = new Cat(name);
    expect(cat.play("ひも")).toEqual("ひも うっはww ワロタwwww");
  });
  test("#eat", () => {
    const cat = new Cat(name);
    expect(cat.eat("ねぎ")).toEqual("ねぎ うまwwww")
  });
  test("#sleep", () => {
    const cat = new Cat(name);
    expect(cat.sleep(30)).toEqual("HPが30回復した！")
  });
})
