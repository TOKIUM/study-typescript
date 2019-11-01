function isDog(animal: string): boolean {
  return animal === 'dog';
}

test('dog', () => {
  const dog = 'dog';
  const cat = 'cat';
  expect(isDog(dog)).toBe(true);
  expect(isDog(cat)).toBe(false);
})
