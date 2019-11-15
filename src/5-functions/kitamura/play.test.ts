import { play, Toy, Ball, Nekojarashi, Person, playWith } from "./play";

describe("play()", () => {
  const toy = new Toy();

  test("play(toy)", () => {
    expect(play(toy)).toEqual("おもちゃで遊んでいますにゃん😻");
  });
});

describe("playWith()", () => {
  const ball = new Ball();
  const nekojarasi = new Nekojarashi();
  const person = new Person();

  test("playWith(toy: Ball)", () => {
    expect(playWith(ball)).toEqual("一人でボール遊びはさみしいにゃん");
  });

  test("playWith(toy: Nekojarasi)", () => {
    expect(playWith(nekojarasi)).toEqual("一人でもにゃんにゃんお😻");
  });

  test("playWith(toy: Ball, person)", () => {
    expect(playWith(ball, person)).toEqual("猫山 にゃん太郎にボール投げてもらったにゃん🐾");
  });

  test("playWith(toy: Nekojarasi, person)", () => {
    expect(playWith(nekojarasi, person)).toEqual("猫山 にゃん太郎のじゃらし方ウマすぎるwwwたまらんwwww");
  });
});
