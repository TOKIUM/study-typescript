import Bird from './bird';
import Cat from './cat';
import { isCat, isBird, flyingCat } from './flying_cat';

test("flyingCat", () => {
  expect(isCat(flyingCat)).toBe(true);
  expect(isBird(flyingCat)).toBe(true);
});
