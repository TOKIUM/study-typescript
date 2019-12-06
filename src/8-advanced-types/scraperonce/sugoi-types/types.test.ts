import { Cat, Dog, Fish, Namable, Swimmable } from "./types";

describe("types", () => {
  test("cat eats fish", () => {
    const fish = {
      name: "しゃけ"
    } as Fish;

    const cat = {
      name: "たま",
      like: fish,
      eat: (food: Namable): string => `${food.name}はうまい`
    } as Cat<Fish>;

    expect(cat.eat(fish)).toEqual("しゃけはうまい");
  });

  test("extract swimmables", () => {
    const meat = {
      name: "わぎゅう"
    } as Namable;

    const fish = {
      name: "しゃけ"
    } as Fish;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const cat = {
      name: "たま",
      like: fish,
      eat: (food: Namable) => `${food.name}はうまい`
    } as Cat<Fish>;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const dog = {
      name: "たま（犬）",
      like: meat,
      eat: (food: Namable) => `${food.name}は最高だわんにゃん`,
      swim: () => `じゃばじゃば`
    } as Dog<Namable>;

    type SwimmableAnimal = Extract<
      Cat<Namable> | Dog<Namable> | Fish,
      Swimmable
    >;
  });

  test("kanazuchi fish", () => {
    type BrickFish = Omit<Fish, keyof Swimmable>;

    const taiyaki: BrickFish = {
      name: "たいやき",
      swim: () => "とける",
      tailLength: 20
    } as Fish;

    // トランスパイル時にエラーとなる（ですよね）
    // expect(() => { taiyaki.swim() }).toThrow();

    // でも値としては残るぞ...
    expect(typeof (taiyaki as BrickFish)["swim"]).toBe("function");
  });

  test("mixin", () => {
    // コンストラクタを定義、らしい...
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Constructor<T = {}> = new (...args: any[]) => T;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Gokigen<T extends Constructor>(Daze: T): any {
      return class extends Daze {
        loves = "USA";
      };
    }

    class Person {
      name = "";
    }

    const GokigenPerson = Gokigen(Person);
    const issa = new GokigenPerson();

    // Mixin
    expect(issa.loves).toBe("USA");
  });
});
