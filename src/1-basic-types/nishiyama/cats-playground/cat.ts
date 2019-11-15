export type catName = "たま" | "みけ" | "わださん";

interface Nyan {
  name: catName;
  toy: any;
  yawn: () => string;
  play: (toy: any) => void;
}

export default abstract class Cat implements Nyan {
  name: catName;
  toy: any;
  readonly hairLength: number;

  constructor(name: catName) {
    this.name = name;
    this.toy = null;
  }

  yawn(): string {
    return "Nyaaaaaaaaaaaaan";
  }

  play(toy: any): void {
    if (this.toy !== null && this.toy !== toy) {
      throw new Error("気分じゃないにゃん");
    }

    this.toy = toy;
  }
}
