import CatLike from "./CatLike";
import DogLike from "./DogLike";
import FishLike from "./FishLike";
import Giant from "./Giant";

type CatDog = CatLike & DogLike;
type CatFish = CatLike & FishLike;
type CatGiant = CatLike & Giant;

function isCat(chimera: CatLike | DogLike | FishLike): chimera is CatLike {
  return (chimera as CatLike).meo !== undefined;
}

describe("Chimera", () => {
  test("Cat and Dog", () => {
    const chimera: CatDog = {
      name: "いぬこ",
      meo: () => "にゃん",
      baw: () => "わんにゃん"
    };

    expect(isCat(chimera)).toBe(true);
    expect(chimera.meo()).toEqual("にゃん");
    expect(chimera.baw()).toEqual("わんにゃん");
  });

  test("Cat and Fish", () => {
    const chimera: CatFish = {
      name: "ぎょにゃん",
      meo: () => "にゃん",
      swim: () => "ぎょぎょにゃー"
    };

    expect(isCat(chimera)).toBe(true);
    expect(chimera.meo()).toEqual("にゃん");
    expect(chimera.swim()).toEqual("ぎょぎょにゃー");
  });

  test("Cat and Giant", () => {
    const chimera: CatGiant = {
      name: "ぎょにゃん",
      height: 208,
      meo: () => "にゃん",
      riot: () => "にゃんにゃんにゃーー！！"
    };

    expect(isCat(chimera)).toBe(true);
    expect(chimera.height).toBe(208);
    expect(chimera.meo()).toEqual("にゃん");
    expect(chimera.riot()).toEqual("にゃんにゃんにゃーー！！");
  });
});
