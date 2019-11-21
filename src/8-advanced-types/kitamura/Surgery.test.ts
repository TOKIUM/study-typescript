import CatLike from "./CatLike";
import Giant from "./Giant";

interface CatGiant extends CatLike, Giant {}

describe("ViolentCat", () => {
  type RemovingProps = "name" | "meo" | "height";
  type ViolentCat = Omit<CatGiant, RemovingProps>;
  const violentCat: ViolentCat = { riot: () => "にゃんにゃんにゃー" };

  test("riot remains", () => {
    expect(violentCat.riot()).toEqual("にゃんにゃんにゃー");
  });
});
