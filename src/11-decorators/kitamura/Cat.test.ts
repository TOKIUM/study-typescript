import Cat from "./Cat";

test("", () => {
  // delete Cat.color;
  const cat = new Cat("nyan");
  console.log(cat);
  expect(cat.getName()).toBe("nyan");
  // delete cat.getName; // prototypeにないからエラーにならないにゃん
  expect(cat.getName()).toBe("nyan");
  expect(cat.color).toBe("白ねこにゃんこ");
  // cat.newProperty; // 元の定義にないからコンパイルエラーになるにゃん
});
