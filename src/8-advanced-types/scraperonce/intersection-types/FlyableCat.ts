import IPet from './IPet';
import Bird from './Bird';
import Fish, { isFish } from './Fish';

export default class FlyableCat implements IPet {
  name = 'ふらいんぐにゃんこ';

  eat(food: Fish | Bird): string {
    if (isFish(food)) {
      return `${food.name}はバチボコおいしいみゃあ`;
    } else {
      return `同族の${food.name}は食べたくないみゃあ`;
    }
  }

  meow(): string {
    return '君と出会った軌跡みゃ';
  }

  fly(): string {
    return 'そらもとべるはずみゃ'
  }
}


export function isFlyableCat(pet: IPet): pet is FlyableCat {
  return [
    (pet as FlyableCat).eat !== undefined,
    (pet as FlyableCat).meow !== undefined,
    (pet as FlyableCat).fly !== undefined
  ].every((v: boolean): boolean => !!v);
}
