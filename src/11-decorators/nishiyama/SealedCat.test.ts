import SealedCat1 from './SealedCat';

test('sealedCat1', () => {
  const cat1 = new SealedCat1('tama');
  expect(cat1.name).toBe('おめかしCat');

  cat1.forgetFeeling;
  expect(cat1.feeling).toBe('最高だにゃん!');
})
