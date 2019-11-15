import readAkebono, { Makurano } from "./makurano";

test("readAkebono", () => {
  expect(readAkebono(1)).toEqual(Makurano.SPRING);
  expect(readAkebono(2)).toEqual(Makurano.SUMMER);
  expect(readAkebono(3)).toEqual(Makurano.AUTUMN);
  expect(readAkebono(4)).toEqual(Makurano.WINTER);
});
