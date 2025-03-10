import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateLayout from "../layouts/PrivateLayout";
import ScrollToUp from "./ScrollToUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToUp />
        <Root />
      </>
    ),
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: (
          <PrivateLayout>
            <Home />
          </PrivateLayout>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
