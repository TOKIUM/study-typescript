import ICat from "./ICat";

export default class CatBox<T extends ICat> {
  ingredients: T[] = [] as T[]

  constructor(cats: T[]) {
    this.ingredients = this.ingredients.concat(cats);
  }

  add(cat: T) {
    this.ingredients.push(cat);
  }
}
