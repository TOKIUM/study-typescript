import CatLike from "./CatLike";
import DogLike from "./DogLike";
import FishLike from "./FishLike";

type CatDog = CatLike & DogLike;
type CatFish = CatLike & FishLike;

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
});
