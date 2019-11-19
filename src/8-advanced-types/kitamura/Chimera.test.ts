import CatLike from "./CatLike";
import DogLike from "./DogLike";

type CatDog = CatLike & DogLike;

function isCat(chimera: CatLike | DogLike): chimera is CatLike {
  return (chimera as CatLike).meo !== undefined;
}

describe("Chimera1", () => {
  test("Cat and Dog", () => {
    const chimera1: CatDog = {
      name: "いぬこ",
      meo: () => "にゃん",
      baw: () => "わんにゃん"
    };

    expect(isCat(chimera1)).toBe(true);
    expect(chimera1.meo()).toEqual("にゃん");
    expect(chimera1.baw()).toEqual("わんにゃん");
  });
});
