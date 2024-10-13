import axios from "axios";

export const baseUrl = "https://fe-test.revvex.io/api/admin";

export const axiosRequest = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

axiosRequest.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (!token) return config;
  config.headers.Authorization = `Bearer ${JSON.parse(token)}`;

  return config;
});
