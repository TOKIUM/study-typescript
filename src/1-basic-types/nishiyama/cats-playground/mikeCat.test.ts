import Cat, { catName } from "./cat";

class lovingToy {
  name: "ねこじゃらし" | "紙くず";

  constructor(name: "ねこじゃらし" | "紙くず") {
    this.name = name;
  }
}

class ignoringToy {
  name: "ボール" | "ちゅーる";

  constructor(name: "ボール" | "ちゅーる") {
    this.name = name;
  }
}

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export default class MikeCat extends Cat {
  readonly hairLength: number;

  constructor(name: catName) {
    super(name);
    this.hairLength = 10;
  }

  play(toy: lovingToy, person?: Person): string;
  play(toy: ignoringToy, person?: Person): string;
  play(toy, person?): string {
    if (toy instanceof lovingToy) {
      return `${toy.name}で遊ぶのたのしいにゃん！！`;
    } else if (
      toy instanceof ignoringToy &&
      person &&
      person.name === "かいぬし"
    ) {
      return `かいぬし、エサくれ！！`;
    } else {
      return "zzz...";
    }
  }
}

test("mikeCat", () => {
  const mike = new MikeCat("みけ");
  expect(mike.name).toEqual("みけ");
  expect(mike.hairLength).toBe(10);
  expect(mike.yawn()).toEqual("Nyaaaaaaaaaaaaan");
});

test("play", () => {
  const mike = new MikeCat("みけ");
  const owner = new Person("かいぬし");
  const stranger = new Person("おじじゃん");
  const nekojarashi = new lovingToy("ねこじゃらし");
  const ball = new ignoringToy("ボール");

  expect(mike.play(nekojarashi)).toEqual(
    "ねこじゃらしで遊ぶのたのしいにゃん！！"
  );
  expect(mike.play(nekojarashi, owner)).toEqual(
    "ねこじゃらしで遊ぶのたのしいにゃん！！"
  );
  expect(mike.play(ball)).toEqual("zzz...");
  expect(mike.play(ball, owner)).toEqual("かいぬし、エサくれ！！");
  expect(mike.play(ball, stranger)).toEqual("zzz...");
});
