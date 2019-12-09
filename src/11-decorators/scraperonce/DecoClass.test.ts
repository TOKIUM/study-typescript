import { DecoClass } from "./DecoClass";

test("", () => {
  const cat = new DecoClass.Cat();
  const doggo = new DecoClass.Doggo();

  // expect(cat.sugee()).toBe("猫SUGEEE"); とおもいきや
  expect(cat.sugee()).toBe("SUGEEE");

  // expect(doggo.sugee()).toBe("犬SUGEEE"); とおもいきや
  expect(doggo.sugee()).toBe("SUGEEE");

  // Mixin(Class Decorator)で定義したmethodのthisは、Decoratorで返したクラスのものを参照するみたい
  // うせやろ...
});
