// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("should return empty string for empty input", () => {
    expect(capitalize("")).toBe("");
  });

  test("should return the same string if already capitalized", () => {
    expect(capitalize("Capital")).toBe("Capital");
  });

  test("should handle special characters", () => {
    expect(capitalize("@test")).toBe("@test");
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
  it("should return [] for an empty array", () => {
    expect(filterOddNumber([])).toEqual([]);
  });

  it("should handle negative numbers", () => {
    expect(filterOddNumber([-1, -2, -3, -4, -5])).toEqual([-2, -4]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    expect(epochDateToUTC(0)).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  it("should handle positive epoch timestamp", () => {
    // Update nilai yang diharapkan sesuai dengan implementasi Anda
    expect(epochDateToUTC(1630000000)).toBe("Thu, 26 Aug 2021 17:46:40 GMT");
  });

  it("should handle negative epoch timestamp", () => {
    // Update nilai yang diharapkan sesuai dengan implementasi Anda
    expect(epochDateToUTC(-1630000000)).toBe("Wed, 08 May 1918 06:13:20 GMT");
  });

  it("should handle invalid input", () => {
    expect(epochDateToUTC("invalid")).toBe("Invalid Date");
  });
});

