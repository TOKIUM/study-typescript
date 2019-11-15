import { play, Cat, CatAware } from "./play";

class CatPerson implements CatAware {
  cat: Cat;
  constructor(cat: Cat) {
    this.cat = cat;
  }
}

// class Dog {}
// class DogPerson {
//   dog: Dog;
//   constructor(dog: Dog) {
//     this.dog = dog;
//   }
// }

describe("play()", () => {
  test("with CatPerson", () => {
    const cat = new Cat();
    const person = new CatPerson(cat);
    const result = play<CatPerson>(person);
    expect(result).toEqual("にゃんにゃんしてるにゃん");
  });

  // test("with DogPerson", () => {
  //   const dog = new Dog();
  //   const person = new DogPerson(dog);
  //   const result = play<DogPerson>(person); // ここでコンパイルエラーになる
  // });
});
