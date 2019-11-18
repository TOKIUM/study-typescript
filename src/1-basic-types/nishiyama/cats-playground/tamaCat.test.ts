import AbstractCat from "./AbstractCat";

class LovingToy {
  name: "ねこじゃらし" | "紙くず";

  constructor(name: "ねこじゃらし" | "紙くず") {
    this.name = name;
  }
}

class IgnoringToy {
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

export default class TamaCat extends AbstractCat {
  readonly hairLength: number;

  constructor(name: string) {
    super(name);
    this.hairLength = 10;
  }

  yawn(): string {
    return "Tamanyaaaaaaan...zzz";
  }

  play(toy: LovingToy, person?: Person): string;
  play(toy: IgnoringToy, person?: Person): string;
  play(toy, person?): string {
    if (toy instanceof LovingToy) {
      return `${toy.name}で遊ぶのたのしいにゃん！！`;
    } else if (
      toy instanceof IgnoringToy &&
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
  const mike = new TamaCat("たま");
  expect(mike.name).toEqual("たま");
  expect(mike.hairLength).toBe(10);
  expect(mike.yawn()).toEqual("Tamanyaaaaaaan...zzz");
});

test("play", () => {
  const mike = new TamaCat("たま");
  const owner = new Person("かいぬし");
  const stranger = new Person("おじじゃん");
  const nekojarashi = new LovingToy("ねこじゃらし");
  const ball = new IgnoringToy("ボール");

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
