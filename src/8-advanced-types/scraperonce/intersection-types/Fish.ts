import IPet from "./IPet";

export default class Fish implements IPet {
  name = 'おさかな';
  swim(): string {
    return 'とっても気持ちがいいのん';
  }
}

export function isFish(pet: IPet): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
