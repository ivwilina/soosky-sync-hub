import { ServiceCfg } from "../configs/ServiceConfigs";

const login = async (email: string, password: string) => {
  const response = await fetch(`${ServiceCfg.baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const res = await response.json();

  return res;
};

export { login };
