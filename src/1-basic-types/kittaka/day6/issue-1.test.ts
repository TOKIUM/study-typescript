import Cat from "./issue-1";

describe("Cat", () => {
  const cat = new Cat("わださん");

  test("#run", () => {
    cat.run();
    expect(cat.getState()).toEqual("running");
  });

  test("#play", () => {
    const toy = "Ball";
    cat.play(toy);
    expect(cat.toy).toEqual(toy);
  });

  test("#play でのおもちゃの取替はダメ！", () => {
    // 1回目の遊び
    const toy = "Ball";
    cat.play(toy);

    // 2回目の遊び
    const nextToy: any = { name: "猫じゃらしを食べる" };
    cat.play(nextToy);
    expect(cat.toy).toEqual(toy);
  });

  test("#eat", () => {
    cat.eat();
    expect(cat.getState()).toEqual("eating");
  });

  test("#sleep", () => {
    cat.sleep();
    expect(cat.getState()).toEqual("sleeping");
  });
});
