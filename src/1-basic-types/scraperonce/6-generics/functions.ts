import CatInterface from "./CatInterface";
import CatBox from "./CatBox";

export function duplicate<T>(item: T): T[] {
  return [item, item];
}

export function createCatBox<T extends CatInterface>(cats: T[]): CatBox<T> {
  return new CatBox(cats);
}
