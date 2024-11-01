import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest();

const config: Config = {
  testEnvironment: "jsdom",
};

export default createJestConfig(config);
