import getProgress from './issue-1';

test('getProgress', () => {
  expect(getProgress(['*', '*', '*'], ['*', '*', '*'])).toBe(100);
  expect(getProgress(['*', '*'], ['*', '*', '*'])).toBe(40);
  expect(getProgress(['*'], ['*', '*', '*'])).toBe(25);
});
