import CatLike from "./CatLike";
// import DogLike from "./DogLike";
// import FishLike from "./FishLike";
import Giant from "./Giant";

interface CatGiant extends CatLike, Giant {}

describe("", () => {
  type ViolentCat = Exclude<CatGiant, CatLike>; // neverになるのなんでなの？
  const violentCat: ViolentCat = { riot: () => "" };

  test("", () => {
    expect(violentCat.riot()).toEqual("");
  });
});
