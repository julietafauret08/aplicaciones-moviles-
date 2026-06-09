import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "../views/home/homeScreen";
import Login from "../views/login/login";
import Registro from "../views/profile/registro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}