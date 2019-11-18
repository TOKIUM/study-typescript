abstract class AbstractCat {
  name: string;
  toy: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  readonly hairLength: number;

  constructor(name: string) {
    this.name = name;
    this.toy = null;
  }

  abstract yawn(): string;
  abstract play(toy: any): void; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export default AbstractCat;
