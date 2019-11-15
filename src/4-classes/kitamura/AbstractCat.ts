import { Toy } from "./Toy";

export default abstract class AbstractCat {
  readonly hairLength: number;
  protected status: string;
  constructor() {
    this.status = null;
  }
  whatAreYouDoingNow(): string {
    return this.status;
  }
  abstract play(toy: Toy): void;
}
