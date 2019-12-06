import Bird from "./Bird";
import Fish from "./Fish";
import PetInterface from "./PetInterface";

export default class Cat implements PetInterface {
  name = "にゃんこ";

  eat(food: Fish | Bird): string {
    return `${food.name}はバチクソおいしいにゃあ`;
  }

  meow(): string {
    return "おかねと豪邸がほしいにゃあ";
  }
}
