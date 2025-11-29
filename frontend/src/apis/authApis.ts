import { ServiceCfg } from "../configs/ServiceConfigs";

const login = async (email: string, password: string) => {
  const response = await fetch(`${ServiceCfg.baseUrl}/auth/login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await response.json();

  return data;
};

export { login };
