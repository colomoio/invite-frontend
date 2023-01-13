import { useContext, type Context } from "react";

type ValueType<C> = C extends Context<infer T> ? T : never;

export function useSafeContext<C extends Context<any>>(
  context: C,
  errorMessage: string
): ValueType<C> {
  const value = useContext(context);

  if (value === undefined) {
    throw new Error(
      errorMessage || "useSafeContext must be used within a Provider"
    );
  }

  return value;
}
