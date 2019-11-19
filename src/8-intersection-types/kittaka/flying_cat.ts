import BirdProps, { DefaultBirdProps } from './bird';
import CatProps, { DefaultCatProps } from './cat';

type Pet = BirdProps | CatProps;

export const isBird = (pet: Pet): boolean => {
  return (pet as BirdProps).fly !== undefined
}

export const isCat = (pet: Pet): boolean => {
  return (pet as CatProps).run !== undefined
}

export const flyingCat: 
BirdProps &
CatProps = {
  run: () => { return 'かけわまり中...' },
  getBodyLength: () => { return 100 },
  fly: () => { return '飛び回り中...' },
  getFeatherLength: () => { return 10 },
};
