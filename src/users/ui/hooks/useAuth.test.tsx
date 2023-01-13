import { renderHook } from "../../../core/ui/test-ui/render";
import { UserType } from "../../domain/User";
import { useAuth } from "./useAuth";

function setup(user: Partial<UserType> | null = null) {
  return renderHook(() => useAuth())
    .withAuth({ user: user as UserType })
    .now();
}

describe("useAuth", () => {
  describe("isUserloggedIn", () => {
    it("is logged in", () => {
      const { result } = setup({
        firstName: "Pedro",
        lastName: "Pecas",
        nickname: "Lonchi",
      });

      const isLoggedIn = result.current.isLoggedIn();

      expect(isLoggedIn).toBe(true);
    });

    it("is logged out", () => {
      const { result } = setup(null);

      const isLoggedIn = result.current.isLoggedIn();

      expect(isLoggedIn).toBe(false);
    });
  });
  describe("getUser", () => {
    it("gives the user", () => {
      const { result } = setup({
        firstName: "Mauri",
        lastName: "Medra",
        nickname: "Mau",
      });

      const user = result.current.getUser();

      expect(user).toEqual({
        firstName: "Mauri",
        lastName: "Medra",
        nickname: "Mau",
      });
    });

    it("returns null", () => {
      const { result } = setup(null);

      const user = result.current.getUser();

      expect(user).toBeNull();
    });
  });
});
