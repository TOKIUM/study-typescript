export const identity = <T>(arg: T): T => {
  return arg;
}

export type Cat = {
  name: string;
  type: string;
  calls?: string;
}

interface CatAware {
  cat: Cat;
}

export const play = <T extends CatAware>(cat: T): T => {
  return cat;
}

export const update_calls = <T extends CatAware>(arg: T): T => {
  arg.cat.calls = 'nyan';
  return arg;
}