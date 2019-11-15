import { identity, Cat, play, update_calls } from "./generics";

test("identity", () => {
  const str = "nekko";
  expect(identity(str)).toEqual(str);
});

test("play", () => {
  const cat: Cat = { name: "たま", type: "manull" };
  expect(play({ cat: cat })).toEqual({ cat: cat });
});

test("update_calls", () => {
  const cat: Cat = { name: "たま", type: "manull" };
  const updated_cat = update_calls({ cat: cat });
  expect(update_calls(updated_cat)).toEqual(updated_cat);
});
