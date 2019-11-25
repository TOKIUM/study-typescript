test("nyan identity", () => {
  const nyan = Symbol("nyan");
  expect(nyan).not.toEqual(Symbol("nyan"));
  expect(nyan.toString()).toEqual(Symbol("nyan").toString());
  expect(nyan.toString()).not.toEqual(Symbol("hoge").toString());
});

test("number identity", () => {
  const num123 = Symbol(123);
  expect(num123).not.toEqual(123);
  expect(num123).not.toEqual(Symbol(123));
  expect(num123.toString()).toEqual(Symbol(123).toString());
});
