import ImmutableMap from "./ImmutableMap";

class Cat {
  constructor(public name: string) {}
}
describe("ImmutableMap", () => {
  const map = new ImmutableMap<string, Cat>();
  const cat = new Cat("ぬこさん");

  test("empty map", () => {
    expect(map.has("ぬこ1")).toBe(false);
    expect(map.get("ぬこ1")).toBeNull();
  });

  test("added cats", () => {
    const catDictionary = map.set("ぬこ1", cat);
    expect(catDictionary.has("ぬこ1")).toBe(true);
    expect(catDictionary.get("ぬこ1")).toEqual(cat);
  });
});
