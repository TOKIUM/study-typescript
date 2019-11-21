import { running, janp, dashJanp, Pos, Direction } from './Actions';

test("running", () => {
  const currentPos: Pos = { x: 0, y: 0 };
  expect(running(currentPos, "Right", 1)).toBe({ x: 1, y: 0 });
});
