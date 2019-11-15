import Cat from "./Cat";
import { HairColor, Feeling, State } from "./enums";

const cat = new Cat("もちごめ", HairColor.RedTabby);

test("hello cat!", () => {
  expect(cat.color).toEqual(HairColor.RedTabby);
  expect(cat.feeling).toEqual(Feeling.Good);
  expect(cat.state).toEqual(State.Awake);
});

test("the cat going to his bed", () => {
  cat.sleep();
  expect(cat.state).toEqual(State.Asleep);
});

test("someone have waked him up", () => {
  cat.wake();
  expect(cat.state).toEqual(State.Awake);
  expect(cat.feeling).toEqual(Feeling.Bad);
});

test("so he wanna eat something good", () => {
  cat.eatSomething();
  expect(cat.feeling).toEqual(Feeling.Good);
});

test("the color of his hair has changed suddenly", () => {
  cat.changeColor(HairColor.SilverTabby);
  expect(cat.color).toEqual(HairColor.SilverTabby);
});
