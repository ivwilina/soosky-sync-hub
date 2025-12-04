import { createContext } from "react";

type UserRole = "guest" | "employee" | "admin";

type User = {
  userId: string;
  userName: string;
  token: string;
  permission: UserRole;
};

interface IAuthContext {
  userRole: UserRole;
  jwt: string,
  user?: User,
  isAuthenticated: boolean;
  isLoading: boolean
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export default AuthContext;

export type { IAuthContext, UserRole, User };
