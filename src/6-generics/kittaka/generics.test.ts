import { identity, Cat, play } from './generics';

test("identity", () => {
  const str = 'nekko';
  expect(identity(str)).toEqual(str);
});

test("play", () => {
  const cat: Cat = { name: 'たま', type: 'manull' }
  expect(play({ cat: cat })).toEqual({ cat: cat });
});
