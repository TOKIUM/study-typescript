import ManulCat from './ManulCat';

describe("ManulCat", () => {
  const manul = new ManulCat;

  test("マヌル猫は確実に毛が絡まる", () => {
    manul.isTangledHair();
    expect(manul.isTangledHair()).toBe(true);
  });

  test("おもちゃで遊ぶ", () => {
    const toy = 'ねずみ'
    expect(manul.play(toy)).toBe(`${toy} くれるとか、さすがやな!!!`);
  })
})
