import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Login from "./routes/login";
import { routes } from "./shared/routes";
import "./index.css";

const router = createBrowserRouter([
  {
    path: routes.LOGIN,
    element: <Login />,
  },

  {
    path: routes.HOME,
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
