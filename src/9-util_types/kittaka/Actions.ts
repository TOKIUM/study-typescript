export enum Direction {
  Top,
  Down,
  Left,
  Right,
}

export type Pos = {
  x: number;
  y: number;
}

// ランニング中のベクトルは前後のみ許可 (2Dゲーム的な感じ)
export const running = (
  currentPos: Pos,
  direction: Exclude<keyof typeof Direction, Direction.Top | Direction.Down>,
  power: number,
): Pos => {
  const numCorrection = typeof direction === typeof Direction.Left ? -1 : 1
  return {
    y: currentPos.y,
    x: currentPos.x + power * numCorrection,
  }
}

// この世界に重力はないので y の減衰は考えない
export const janp = (
  currentPos: Pos,
  power: number,
) => {
  return {
    y: currentPos.y + power,
    x: currentPos.x,
  }
}

export const dashJanp = (
  currentPos: Pos,
  angle: number,
  power: number,
) => {
  let fixed_angle: number;
  if (angle < 0) { fixed_angle = angle * -1 }
  if (fixed_angle > 360) {
    fixed_angle = (fixed_angle % 360) + 360
  }

  const fixedX = Math.cos(fixed_angle) * power;
  const fixedY = Math.sin(fixed_angle) * power;

  return {
    y: currentPos.y + fixedX,
    x: currentPos.x + fixedY,
  }
}
