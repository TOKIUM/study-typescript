import { Cat, Fish, Dog, Mammal, Namable, Swimmable } from "./types";

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
      name: 'たま（犬）',
      like: meat,
      eat: (food) => `${food.name}は最高だわんにゃん`,
      swim: () => `じゃばじゃば`,
    } as Dog<Namable>;

    type SwimmableAnimal = Extract<Cat<Namable> | Dog<Namable> | Fish, Swimmable>;
  });

  test('kanazuchi fish', () => {
    type BrickFish = Omit<Fish, keyof Swimmable>;

    const taiyaki: BrickFish = {
      name: 'たいやき',
      swim: () => 'とける',
      tailLength: 20,
    } as Fish;

    // トランスパイル時にエラーとなる（ですよね）
    // expect(() => { taiyaki.swim() }).toThrow();

    // でも値としては残るぞ...
    expect(typeof (taiyaki as any as BrickFish)['swim']).toBe('function');
  });

  test('mixin', () => {

    // コンストラクタを定義、らしい...
    type Constructor<T = {}> = new (...args: any[]) => T;

    function Gokigen<T extends Constructor>(Daze: T) {
      return class extends Daze {
        loves = 'USA';
      };
    }

    class Person {
      name = '';
    }

    const GokigenPerson = Gokigen(Person);
    const issa = new GokigenPerson();

    // Mixin
    expect(issa.loves).toBe('USA');
  })
});