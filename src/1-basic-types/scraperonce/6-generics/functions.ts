import ICat from "./ICat";
import CatBox from "./CatBox";

export function duplicate<T>(item: T): T[] {
  return [item, item];
}

export function createCatBox<T extends ICat>(cats: T[]): CatBox<T> {
  return new CatBox(cats);
}
