import { SystemStyleFunction, SystemStyleObject } from "@chakra-ui/theme-tools";

type StyleManagerArgs = {
  c: (dark: string, light: string) => string;
};

type StyleManagerReturn = SystemStyleFunction;
/**
 * @example
 * const components = {
 *  CustomBadge: {
 *  baseStyle: styleManager(({ c }) => ({
 *      bg: c('blue.500', 'blue.300')),
 *      padding: '1rem',
 *  }))
 * }
 * }
 */
export type StyleManagerFn = (args: StyleManagerArgs) => SystemStyleObject;
export function styleManager(fn: StyleManagerFn): StyleManagerReturn {
  return ({ colorMode }) => {
    const c: StyleManagerArgs["c"] = (dark, light) =>
      colorMode === "dark" ? dark : light;
    return fn({ c });
  };
}
