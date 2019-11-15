import { HairColor, State, Feeling } from "./enums";

export default class Cat {
  constructor(
    public name: string,
    public color: HairColor,
    public state: State = State.Awake,
    public feeling: Feeling = Feeling.Good
  ) {}

  sleep() {
    this.state = State.Asleep;
  }

  wake() {
    this.state = State.Awake;
    this.feeling = Feeling.Bad;
  }

  changeColor(color: HairColor) {
    this.color = color;
  }

  eatSomething() {
    this.feeling = Feeling.Good;
  }
}
