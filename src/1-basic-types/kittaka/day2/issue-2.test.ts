import containSearchText from './issue-2';

test('containSearchText', () => {
  const project = {
    displayId: 'displayId',
    name: 'name',
  }

  expect(containSearchText('displayId', 'name', project)).toBe(true);
});
