import { createContext } from "react";

type UserRole = "guest" | "employee" | "admin";

interface IAuthContext {
  userRole: UserRole;
  jwt: string,
  user: object,
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export default AuthContext;

export type { IAuthContext, UserRole };
