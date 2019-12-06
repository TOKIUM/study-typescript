import CatInterface from "./CatInterface";

export default class CatBox<T extends CatInterface> {
  private _ingredients: T[] = [] as T[];

  get ingredients(): T[] {
    return this._ingredients.concat();
  }

  constructor(cats: T[]) {
    this._ingredients = this._ingredients.concat(cats);
  }

  public add(cat: T): void {
    this._ingredients.push(cat);
  }
}
