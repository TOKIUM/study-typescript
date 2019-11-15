import AbstractCat from "./AbstractCat";
import { Toy } from "./Toy";

export default class NorweigianForestCat extends AbstractCat {
  readonly hairLength = 20;
  play(toy: Toy): void {
    this.status = `もうにゃんにゃん🐾🐾`;
  }
}
