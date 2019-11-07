import NorweigianForestCat from "./norweigianForestCat";
import { Nekojarashi } from "./toy";

describe("NorweigianForestCat", () => {
  test("hairLength", () => {
    const cat = new NorweigianForestCat();
    expect(cat.hairLength).toBe(20);
  })
  test("#play", () => {
    const cat = new NorweigianForestCat();

    expect(cat.whatAreYouDoingNow()).toBeNull();
    cat.play(new Nekojarashi);
    expect(cat.whatAreYouDoingNow()).toEqual("もうにゃんにゃん🐾🐾");
  })
})
