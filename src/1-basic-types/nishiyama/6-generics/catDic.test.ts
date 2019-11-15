import MyMap from "./myMap";
import MikeCat from "../cats-playground/mikeCat.test";
import tamaCat from "../cats-playground/tamaCat.test";

test("catDictionary", () => {
  const catDic = new MyMap<string, MikeCat>();

  expect(catDic.getCount()).toBe(0);

  const mike = new MikeCat("みけ");
  catDic.add("みけ", mike);

  expect(catDic.getValueOf("みけ")).toBe(mike);
  expect(catDic.getCount()).toBe(1);

  const tama = new tamaCat("たま");
  catDic.add("たま", tama);

  expect(catDic.getValueOf("たま")).toBe(tama);
  expect(catDic.getCount()).toBe(2);

  catDic.remove("たま");
  expect(catDic.getValueOf("たま")).toBe(null);
  expect(catDic.getValueOf("みけ")).toBe(mike);
  expect(catDic.getCount()).toBe(1);

  catDic.remove("みけ");
  expect(catDic.getValueOf("たま")).toBe(null);
  expect(catDic.getValueOf("みけ")).toBe(null);
  expect(catDic.getCount()).toBe(0);
});
