import { useSafeContext } from "../../../core/ui/hooks/useSafeContext";
import { AuthContext } from "../AuthProvider";

export function useAuth() {
  const value = useSafeContext(
    AuthContext,
    "useAuth must be used within a AuthProvider"
  );

  function isLoggedIn() {
    return value.user !== null;
  }

  function getUser() {
    return value.user;
  }

  return {
    isLoggedIn,
    getUser,
  };
}
