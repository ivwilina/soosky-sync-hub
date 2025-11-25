import { ServiceCfg } from "../../../configs/ServiceConfigs";

const login = async (username: string, password: string) => {
  const response = await fetch(`${ServiceCfg.baseUrl}/auth/login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      
    })
  });
};

export { login };
