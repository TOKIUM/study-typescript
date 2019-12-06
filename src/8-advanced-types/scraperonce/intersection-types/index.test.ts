import { mergeAbilities } from ".";
import Bird from "./Bird";
import Cat from "./Cat";
import Fish from "./Fish";
import { isFlyableCat } from "./FlyableCat";

const cat = new Cat();
const fish = new Fish();
const bird = new Bird();

test("cat eats food", () => {
  expect(cat.eat(fish)).toEqual("おさかなはバチクソおいしいにゃあ");
  expect(cat.eat(bird)).toEqual("とりさんはバチクソおいしいにゃあ");
  // expect(cat.eat(cat)) -> エラー
});

test("create flyable cat and ", () => {
  const monster = mergeAbilities(cat, bird);
  expect(isFlyableCat(monster)).toBe(true);
});
