import AbstractCat from "./AbstractCat";
import { Toy } from "./Toy";

export default class NorweigianForestCat extends AbstractCat {
  readonly hairLength = 20;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  play(toy: Toy): void {
    this.status = `もうにゃんにゃん🐾🐾`;
  }
}
