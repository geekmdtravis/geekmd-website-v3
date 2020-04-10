import {
  calculateBfFemale,
  calculateBfMale,
  roundDownToNearestHalfPoint,
  roundUpToNearestHalfPoint,
} from "./index"
import Gender from "../../../components/models/Gender"

describe("BodyFatCalculatorPage", () => {
  const bodyFatResultTolerance = 0.15
  it("calculates female body fat correctly", () => {
    const testData = {
      gender: Gender.FEMALE,
      height: 66,
      neck: 13,
      abdomen: 39,
      hips: 44,
    }
    const actual = calculateBfFemale(testData)
    const expected = 44.93
    const expectedRange = {
      low: expected - bodyFatResultTolerance,
      high: expected + bodyFatResultTolerance,
    }

    expect(actual).toBeLessThan(expectedRange.high)
    expect(actual).toBeGreaterThan(expectedRange.low)
  })
  it("calculates male body fat correctly", () => {
    const testData = {
      gender: Gender.MALE,
      height: 66,
      neck: 13,
      abdomen: 39,
      hips: 44,
    }
    const actual = calculateBfMale(testData)
    const expected = 30.87
    const expectedRange = {
      low: expected - bodyFatResultTolerance,
      high: expected + bodyFatResultTolerance,
    }

    expect(actual).toBeLessThan(expectedRange.high)
    expect(actual).toBeGreaterThan(expectedRange.low)
  })
  test.each`
    input   | expectedResult
    ${0.22} | ${0.5}
    ${0.63} | ${1.0}
    ${0.88} | ${1.0}
    ${5.22} | ${5.5}
    ${5.63} | ${6.0}
    ${5.88} | ${6.0}
  `(
    "rounds $input to be rounded up to $expectedResult",
    ({ input, expectedResult }) => {
      expect(roundUpToNearestHalfPoint(input).toFixed(2)).toEqual(
        expectedResult.toFixed(2)
      )
    }
  )
  test.each`
    input   | expectedResult
    ${0.22} | ${0.0}
    ${0.63} | ${0.5}
    ${0.88} | ${0.5}
    ${5.22} | ${5.0}
    ${5.63} | ${5.5}
    ${5.88} | ${5.5}
  `(
    "rounds $input to be rounded down to $expectedResult",
    ({ input, expectedResult }) => {
      expect(roundDownToNearestHalfPoint(input).toFixed(2)).toEqual(
        expectedResult.toFixed(2)
      )
    }
  )
})
