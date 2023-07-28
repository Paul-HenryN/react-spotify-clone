import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Login from "./routes/login";
import { routes } from "./shared/routes";
import "./index.css";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: routes.LOGIN,
    element: <Login />,
  },

  {
    path: routes.HOME,
    element: <Root />,
    children: [
      {
        path: routes.HOME,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
