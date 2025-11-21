import { createContext } from "react";

type UserRole = "guest" | "employee" | "admin";

interface IAuthContext {
  userRole: UserRole;
  isAuthenticated: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export default AuthContext;

export type { IAuthContext };
