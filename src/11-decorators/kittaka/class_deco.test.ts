import Prinny from './class_deco';

test("Prinny#attack", () => {
  const prinny = new Prinny();
  expect(prinny.attack()).toBe('🗡');
});

test("Prinny#explosion", () => {
  const prinny = new Prinny();
  expect((<any>prinny).explosion()).toBe('💥');
});
