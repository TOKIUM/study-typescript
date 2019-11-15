import AbstractCat from "./AbstractCat";
import { Toy } from "./Toy";

export default class MikeCat extends AbstractCat {
  readonly hairLength = 7;

  play(toy: Toy): void {
    this.status = `三毛猫は${toy.name}で遊んでるにゃん🐾`;
  }
}
