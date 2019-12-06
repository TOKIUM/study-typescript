export type Haired = {
  hairColor: "red" | "brown" | "gold" | "black" | "white" | "blue";
  hairLength: number;
};

export type Tailed = {
  tailLength: number;
};

export type Swimmable = {
  swim: () => string;
};

export type Namable = {
  name: string;
};

export type Mammal<T extends Namable> = {
  like: T;
  eat: (food: T) => string;
};

export type Cat<T extends Namable> = Mammal<T> & Namable & Tailed & Haired;
export type Dog<T extends Namable> = Mammal<T> &
  Namable &
  Tailed &
  Haired &
  Swimmable;
export type Fish = Namable & Tailed & Swimmable;
