import { createCatBox, duplicate } from "./functions";
import MaineCoon from "./MaineCoon";

const cat = new MaineCoon("だいふく", "レッドタビー");
const cats = [cat, cat] as MaineCoon[];

test("#duplicate", () => {
  const duplicated = duplicate<MaineCoon>(cat);
  expect(duplicated).toEqual([cat, cat]);
});

test("#createCatBox", () => {
  const box = createCatBox<MaineCoon>(cats);
  expect(box.ingredients).toEqual([cat, cat]);

  box.add(cat);
  expect(box.ingredients).toEqual([cat, cat, cat]);
});
