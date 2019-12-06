import { Cat, Doggo } from "./function";

test("", () => {
  const cat = new Cat();
  const doggo = new Doggo();

  expect(cat.say()).toBe("・・・にゃん");
  expect(doggo.say()).toBe("・・・わん");
});
