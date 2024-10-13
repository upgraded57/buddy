import { Navigate, Outlet } from "react-router-dom";

export default function Index() {
  const token = sessionStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/auth/login" />;
}
