import AbstractCat from "./abstractCat";
import { Toy } from "./toy";

export default class NorweigianForestCat extends AbstractCat {
  readonly hairLength = 20;
  play(toy: Toy): void {
    this.status = `もうにゃんにゃん🐾🐾`;
  }
}
