import React, { useState } from "react";
import type { ReactNode } from "react";
import type { UserRole } from "./AuthContext";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<UserRole>("guest");
  const isAuthenticated = userRole !== "guest";
  const login = (role: UserRole) => setUserRole(role);
  const logout = () => setUserRole("guest");
  return (
    <AuthContext.Provider value={{userRole, isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
