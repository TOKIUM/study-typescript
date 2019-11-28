import { SightseeingSpots, catSymbols } from './Travel';

test("SightseeingSpots", () => {
  expect(SightseeingSpots[catSymbols.catTmp]).toBe('猫神神社');
  expect(SightseeingSpots[catSymbols.catHouse]).toBe('猫を買っている家の軒下');
  expect(SightseeingSpots[catSymbols.catIsland]).toBe('石垣島');
});
