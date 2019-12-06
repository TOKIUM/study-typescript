import PetInterface from "./PetInterface";

export default class Fish implements PetInterface {
  name = "おさかな";
  swim(): string {
    return "とっても気持ちがいいのん";
  }
}

export function isFish(pet: PetInterface): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
