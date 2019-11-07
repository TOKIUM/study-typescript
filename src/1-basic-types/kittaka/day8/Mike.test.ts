import MikeCat from './MikeCat';

describe("MikeCat", () => {
  const mike = new MikeCat;

  test("三毛猫は毛が絡まらない", () => {
    mike.isTangledHair();
    expect(mike.isTangledHair()).toBe(false);
  });

  test("おもちゃで遊ぶ", () => {
    const toy = 'ねずみ'
    expect(mike.play(toy)).toBe(`仕方ない. ${toy} で遊ぶか`);
  })
})
