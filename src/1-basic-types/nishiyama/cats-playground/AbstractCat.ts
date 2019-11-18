abstract class AbstractCat {
  name: string;
  toy: any;
  readonly hairLength: number;

  constructor(name: string) {
    this.name = name;
    this.toy = null;
  }

  abstract yawn(): string;
  abstract play(toy: any): void;
}

export default AbstractCat;
