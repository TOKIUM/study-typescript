import { Dogs } from "./MyDog";
const MyDog = Dogs.MyDog;

test("", () => {
  expect(new MyDog()).toBeInstanceOf(MyDog);
});
