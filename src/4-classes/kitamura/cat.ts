import Nyan from "./nyan";
import Animal from "./animal";

export default class Cat implements Nyan, Animal {
  private name: string;
  constructor(name: string) {
    if (["たま", "みけ", "わださん"].indexOf(name) < 0) {
      throw Error("なまえがおかしい");
    }
    this.name = name;
  }
  run(): string {
    return `${this.name}は走った！`;
  }
  play(toy: string): string {
    return `${toy} うっはww ワロタwwww`;
  }
  eat(food: string): string {
    return `${food} うまwwww`;
  }
  sleep(time: number): string {
    return `HPが${time}回復した！`;
  }
  greet(): string {
    return "にゃーん";
  }
}
