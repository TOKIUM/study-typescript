import { createCat } from './main';
import { Cats } from './Cats';

const Abyssinian = Cats.Abyssinian;
const MaineCoon = Cats.MaineCoon;
const AmericanShortHair = Cats.AmericanShortHair;

test('create cats', () => {
  const catAby = createCat('あび', Cats.Types.Abyssinian);
  const catMaine = createCat('だいふく', Cats.Types.MaineCoon);
  const catAme = createCat('もち', Cats.Types.AmericanShortHair);

  expect(catAby).toBeInstanceOf(Abyssinian);
  expect(catAby.name).toBe('あび');

  expect(catMaine).toBeInstanceOf(MaineCoon);
  expect(catMaine.name).toBe('だいふく');

  expect(catAme).toBeInstanceOf(AmericanShortHair);
  expect(catAme.name).toBe('もち');
});
