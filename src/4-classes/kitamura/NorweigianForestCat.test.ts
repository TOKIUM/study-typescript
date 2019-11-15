import NorweigianForestCat from "./NorweigianForestCat";
import { Nekojarashi, Ball } from "./Toy";

describe("NorweigianForestCat", () => {
  test("hairLength", () => {
    const cat = new NorweigianForestCat();
    expect(cat.hairLength).toBe(20);
  })
  test("#play", () => {
    const cat = new NorweigianForestCat();

    expect(cat.whatAreYouDoingNow()).toBeNull();
    cat.play(new Nekojarashi());
    expect(cat.whatAreYouDoingNow()).toEqual("もうにゃんにゃん🐾🐾");

    cat.play(new Ball());
    expect(cat.whatAreYouDoingNow()).toEqual("もうにゃんにゃん🐾🐾");
  })
})
