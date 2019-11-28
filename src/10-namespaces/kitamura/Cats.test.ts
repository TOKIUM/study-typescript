import { Cats } from "./Cats";
// import * as cats from "./Cats"; // cats.Cats.MyCatになるらしい

const MyCat = Cats.MyCat;

test("", () => {
  const cat = new MyCat();
  expect(cat).toBeInstanceOf(MyCat);
});
