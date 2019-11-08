export class Toy {
  protected _name = "おもちゃ";
  get name(): string {
    return this._name;
  }
}
export class Ball extends Toy {
  protected _name = "ボール";
}
export class Nekojarashi extends Toy {
  protected _name = "ねこじゃらし";
}
export class Person {
  readonly name = "猫山 にゃん太郎";
}

export function play(toy: Toy): string {
  return `${toy.name}で遊んでいますにゃん😻`;
}
export function playWith(toy: Ball, person?: Person): string;
export function playWith(toy: Nekojarashi, person?: Person): string;
export function playWith(toy, person?: Person): string {
  if (!person) {
    if (toy instanceof Ball) {
      return "一人でボール遊びはさみしいにゃん";
    } else if (toy instanceof Nekojarashi) {
      return "一人でもにゃんにゃんお😻";
    } else {
      // ここは通らない
      return "にゃーーーん";
    }
  } else {
    if (toy instanceof Ball) {
      return `${person.name}にボール投げてもらったにゃん🐾`;
    } else if (toy instanceof Nekojarashi) {
      return `${person.name}のじゃらし方ウマすぎるwwwたまらんwwww`;
    } else {
      // ここは通らない
      return "にゃんにゃん";
    }
  }
}
