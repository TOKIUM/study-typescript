import Nyan from "./Nyan";
import Animal from "./Animal";

type CatName = "たま" | "みけ" | "わださん";

export default class Cat implements Nyan, Animal {
  private name: string;
  private playingToy: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any

  constructor(name: CatName) {
    this.name = name;
    this.playingToy = null;
  }

  run(): string {
    return `${this.name}は走った！`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  play(toy: any): string {
    if (this.playingToy) {
      throw Error(`いま${this.playingToy}で遊んでるの！`);
    }
    this.playingToy = toy;
    return `${this.playingToy} うっはww ワロタwwww`;
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
