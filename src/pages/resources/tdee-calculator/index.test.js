import { calculataeKatchMcArdleBmr, calculateTdee } from "./index";

describe("TDEE Calculator Page", () => {
  it("calculates Katch-McArdle BMR correctly", () => {
    const tolerance = 0.1;
    const weight = 200; // lbs
    const bodyFatPercentage = 35; // %
    const actual = calculataeKatchMcArdleBmr(weight, bodyFatPercentage);
    const expected = 1646.3636363636365; // kilocalories
    const expectedRange = {
      low: expected - tolerance,
      high: expected + tolerance
    };

    expect(actual).toBeLessThan(expectedRange.high);
    expect(actual).toBeGreaterThan(expectedRange.low);
  });
});
