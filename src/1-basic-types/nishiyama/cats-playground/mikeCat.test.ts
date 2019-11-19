import AbstractCat from "./AbstractCat";
import Person from "./Person";
import Toy from "./Toy";

export default class MikeCat extends AbstractCat {
  readonly hairLength: number;

  constructor(name: string) {
    super(name);
    this.hairLength = 10;
  }

  yawn(): string {
    return "Myaaaaa....zzz";
  }

  play(toy: Toy, person?: Person): string {
    if (toy.name === "ねこじゃらし") {
      return `${toy.name}で遊ぶのたのしいにゃん！！`;
    } else if (toy.name === "ボール" && person && person.name === "かいぬし") {
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
  expect(mike.yawn()).toEqual("Myaaaaa....zzz");
});

test("play", () => {
  const mike = new MikeCat("みけ");
  const owner = new Person("かいぬし");
  const stranger = new Person("おじじゃん");
  const nekojarashi = new Toy("ねこじゃらし");
  const ball = new Toy("ボール");

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
