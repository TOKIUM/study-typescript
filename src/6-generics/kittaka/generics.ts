export const identity = <T>(arg: T): T => {
  return arg;
}

export type Cat = {
  name: string;
  type: string;
}

interface CatAware {
  cat: Cat;
}

export const play = <T extends CatAware>(cat: T): T => {
  return cat;
}
