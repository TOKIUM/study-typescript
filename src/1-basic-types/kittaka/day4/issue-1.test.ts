import SearchParamsStorage, { default_data } from './issue-1';

test('SearchParamsStorage', () => {
  const storage = new SearchParamsStorage
  expect(storage.data).toStrictEqual(default_data);
});
