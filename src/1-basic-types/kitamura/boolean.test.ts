function nyanEnabled(animal: string): boolean {
  switch (animal) {
    case "cat":
      return true;
  }
  return false;
}

test("flags", () => {
  const isCat = true;
  const isDog = false;
  expect(isCat).toBe(true);
  expect(isDog).toBe(false);
});

test("nyanEnabled", () => {
  expect(nyanEnabled("cat")).toBe(true);
  expect(nyanEnabled("dog")).toBe(false);
  expect(nyanEnabled("cat person")).toBe(false);
});
