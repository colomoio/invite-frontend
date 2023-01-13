import { useState, createContext, ReactNode } from "react";
import { UserType } from "../domain/User";

export type AuthContextType = {
  user: UserType | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
});

export type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider(props: AuthProviderProps) {
  const [user] = useState<UserType | null>(null);

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
}
