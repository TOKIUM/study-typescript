export function mergeAbilities<First, Second>(first: First, second: Second): First & Second {
  const result = {} as First & Second;

  for (const prop in first) {
    (result as First)[prop] = first[prop];
  }
  for (const prop in second) {
    (result as Second)[prop] = second[prop];
  }

  return result;
}
