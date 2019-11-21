import { Cat, Fish, Dog, Mammal, Namable, Swimmable } from "./types";
import Cat from "#/1-basic-types/scraperonce/6-generics/Cat";

describe('types', () => {
  test('cat eats fish', () => {

    const fish = {
      name: 'しゃけ'
    } as Fish;

    const cat = {
      name: 'たま',
      like: fish,
      eat: (food) => `${food.name}はうまい`,
    } as Cat<Fish>

    expect(cat.eat(fish)).toEqual('しゃけはうまい')
  });

  test('extract swimmables', () => {

    const meat = {
      name: 'わぎゅう'
    } as Namable;

    const fish = {
      name: 'しゃけ'
    } as Fish;

    const cat = {
      name: 'たま',
      like: fish,
      eat: (food) => `${food.name}はうまい`,
    } as Cat<Fish>

    const dog = {
      name: 'たま',
      like: meat,
      eat: (food) => `${food.name}は最高だわんにゃん`,
      swim: () => `じゃばじゃば`,
    } as Dog<Namable>;

    type SwimmableAnimal = Extract<Cat<Namable> |Dog<Namable>|Fish, Swimmable>;

    // こんなことがしたい
    // expect(cat typeof SwimmableAnimal).toBeFalse()
    // expect(dog typeof SwimmableAnimal).toBeTrue()
    // expect(fish typeof SwimmableAnimal).toBeTrue()
  })
});