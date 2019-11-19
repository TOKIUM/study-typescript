import Bird from './bird';
import Cat from './cat';

type Pet = Bird | Cat;

export const isBird = (pet: Pet): boolean => {
  return (pet as Bird).fly !== undefined
}

export const isCat = (pet: Pet): boolean => {
  return (pet as Cat).run !== undefined
}

export const flyingCat: Bird & Cat = {
  run: () => { return 'かけわまり中...' },
  fly: () => { return '飛び回り中...' },
  getBodyLength: () => { return 100 },
  getFeatherLength: () => { return 10 },
}