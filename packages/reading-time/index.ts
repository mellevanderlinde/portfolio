export function getReadingTime(content: string): number {
  if (!content) throw new Error("Content is required");
  const wordsPerMinute = 200;
  const content_ = content.replace(/\n/g, " ");
  const words = content_.split(" ").filter((word) => word !== "");
  return Math.ceil(words.length / wordsPerMinute);
}
