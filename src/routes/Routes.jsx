import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayOut from "../layout/MainLayOut";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
