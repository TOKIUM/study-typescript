import { createCat } from './main';
import { Cats } from './Cats';

test('create cats', () => {
  const catAby = createCat('あび', Cats.Types.Abyssinian);
  const catMaine = createCat('だいふく', Cats.Types.MaineCoon);
  const catAme = createCat('もち', Cats.Types.AmericanShortHair);

  expect(catAby instanceof Cats.Abyssinian).toBeTruthy();
  expect(catMaine instanceof Cats.MaineCoon).toBeTruthy();
  expect(catAme instanceof Cats.AmericanShortHair).toBeTruthy();
});
