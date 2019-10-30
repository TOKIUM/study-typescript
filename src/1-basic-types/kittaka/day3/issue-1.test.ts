import handleStatusChange from './issue-1';

test('handleStatusChange', () => {
  expect(handleStatusChange(true, 'is_cat')).toStrictEqual({ status: ['is_cat', 'is_dog'] });
  expect(handleStatusChange(false, 'is_cat')).toStrictEqual({ status: ['is_dog'] });
  expect(handleStatusChange(true, 'is_parrot')).toStrictEqual({ status: ['is_cat', 'is_dog', 'is_parrot'] });
});
