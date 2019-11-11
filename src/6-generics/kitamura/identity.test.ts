import identity from "./identity";

describe("identity", () => {
  test("where T is string", () => {
    const result = identity<string>("にゃんこワールド");
    expect(result).toEqual("にゃんこワールド");
  });
  test("where T is number", () => {
    const result = identity<number>(222);
    expect(result).toBe(222);
  });
});
