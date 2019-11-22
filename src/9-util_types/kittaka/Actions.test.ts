import { running, janp, dashJanp, Pos, Direction } from './Actions';

test("running", () => {
  const currentPos: Pos = { x: 0, y: 0 };
  const subject = running(currentPos, "Right", 1)
  expect(subject.x).toBe(1);
  expect(subject.y).toBe(0);
});
