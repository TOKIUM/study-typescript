import containSearchText from './issue-2';

test('containSearchText when project.displayId is "displayId" and project.name is "name"', () => {
  const project = {
    displayId: 'displayId',
    name: 'name',
  }
  expect(containSearchText('displayId', 'name', project)).toBe(true);
});
