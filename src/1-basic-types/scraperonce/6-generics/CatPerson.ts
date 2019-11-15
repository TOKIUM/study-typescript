import ICat from "./ICat";

export default class CatPerson<T extends ICat> {
  constructor(private cat: T) {}

  sayName(): string {
    return `なまえは ${this.cat.name} だにゃー`;
  }

  sayColor(): string {
    return `毛のいろは ${this.cat.color} だにゃー`;
  }

  sayHairLength(): string {
    return `毛のながさは ${this.cat.hairLength} cm だにゃー`;
  }

  changeCat(cat: T): void {
    this.cat = cat;
  }

  trim(length: number): void {
    this.cat.hairLength = length;
  }
}
