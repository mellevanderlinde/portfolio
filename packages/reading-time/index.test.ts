import { getReadingTime } from "@repo/reading-time";

const sentence = "This is an example sentence. ";

it("should return the expected reading time", () => {
  expect(getReadingTime(" ")).toBe(0);
  expect(getReadingTime(sentence)).toBe(1);
  expect(getReadingTime(sentence.repeat(80))).toBe(2);
  expect(getReadingTime(sentence.repeat(81))).toBe(3);
  expect(getReadingTime(sentence.repeat(1000))).toBe(25);
  expect(getReadingTime(sentence.repeat(1001))).toBe(26);
});

it("should throw an error if content is not provided", () => {
  expect(() => getReadingTime("")).toThrow("Content is required");
});

it("should not count new line characters as words", () => {
  expect(getReadingTime(sentence + "\n ")).toBe(1);
  expect(getReadingTime(sentence + "\n ".repeat(1000))).toBe(1);
});

it("should not count empty strings as words", () => {
  expect(getReadingTime(sentence + "  ")).toBe(1);
  expect(getReadingTime(sentence + "  ".repeat(1000))).toBe(1);
});