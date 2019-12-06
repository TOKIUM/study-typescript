import { Feeling, HairColor, State } from "./enums";

export default class Cat {
  constructor(
    public name: string,
    public color: HairColor,
    public state: State = State.Awake,
    public feeling: Feeling = Feeling.Good
  ) {}

  sleep(): void {
    this.state = State.Asleep;
  }

  wake(): void {
    this.state = State.Awake;
    this.feeling = Feeling.Bad;
  }

  changeColor(color: HairColor): void {
    this.color = color;
  }

  eatSomething(): void {
    this.feeling = Feeling.Good;
  }
}
