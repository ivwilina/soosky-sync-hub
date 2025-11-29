import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { UserRole } from "./AuthContext";
import AuthContext from "./AuthContext";
import { login as apiLogin } from "../../apis/authApis";

type User = {
  id: string;
  name: string;
  token: string;
  permission: UserRole;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<UserRole>("guest");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [jwt, setJwt] = useState<string>("");
  const [user, setUser] = useState<object>({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
      setUserRole(parsedUser.permission);
      setJwt(parsedUser.token);
    }

    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const userInfo: User = await apiLogin(email, password);
    if (!("errmsg" in userInfo)) {
      const newStoredUser = {
        ...userInfo,
      };
      localStorage.setItem("user", JSON.stringify(newStoredUser));
      setUser(newStoredUser);
      setIsAuthenticated(true);
      setJwt(userInfo.token);
      setUserRole(userInfo.permission);
    }
  };
  const logout = () => setUserRole("guest");
  return (
    <AuthContext.Provider
      value={{ userRole, isAuthenticated, jwt, user, login, logout, isLoading }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
