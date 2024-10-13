import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "@/lib/routes";

function App() {
  const router = createBrowserRouter(Routes);
  return <RouterProvider router={router} />;
}

export default App;
