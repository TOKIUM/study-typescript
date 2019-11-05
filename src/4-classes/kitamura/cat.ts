import Nyan from "./nyan";
import Animal from "./animal";

export default class Cat implements Nyan, Animal {
  run(): void {
    return;
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
