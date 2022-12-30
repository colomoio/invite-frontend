import { SystemStyleFunction } from "@chakra-ui/theme-tools";

import { styleManager, StyleManagerFn } from "./styleManager";

/**
 * @example
 * setup(({ c }) => ({ bg: c('blue.500', 'blue.300')})).with("dark")
 */
function setup(fn: StyleManagerFn) {
  return {
    with: (colorMode: "dark" | "light") =>
      styleManager(fn)({ colorMode } as Parameters<SystemStyleFunction>[0]),
  };
}

describe("styleManager", () => {
  const bgColor: StyleManagerFn = ({ c }) => {
    return { bg: c("blue.500", "blue.300") };
  };

  it("set bg colors in dark mode", () => {
    const result = setup(bgColor).with("dark");
    expect(result).toEqual({ bg: "blue.500" });
  });

  it("set bg colors in light mode", () => {
    const result = setup(bgColor).with("light");
    expect(result).toEqual({ bg: "blue.300" });
  });
});
