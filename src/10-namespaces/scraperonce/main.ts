import { Cats } from "./Cats";

export const createCat = (name: string, type: Cats.Types | null): Cats.Cat => {
  switch (type) {
    case Cats.Types.Abyssinian:
      return new Cats.Abyssinian(name);
    case Cats.Types.AmericanShortHair:
      return new Cats.AmericanShortHair(name);
    case Cats.Types.MaineCoon:
      return new Cats.MaineCoon(name);
    default:
      return new Cats.Cat(name);
  }
};