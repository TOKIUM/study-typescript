import MikeCat from "./mikeCat";
import { Nekojarashi } from "./toy";

describe("MikeCat", () => {
  test("hairLength", () => {
    const cat = new MikeCat();
    expect(cat.hairLength).toBe(7);
  })
  test("#play", () => {
    const cat = new MikeCat();

    expect(cat.whatAreYouDoingNow()).toBeNull();
    cat.play(new Nekojarashi);
    expect(cat.whatAreYouDoingNow()).toEqual("三毛猫はねこじゃらしで遊んでるにゃん🐾");
  })
})
