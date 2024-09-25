import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import App from "./App";
import Callback from "./components/Callback";
import Login from "./components/Login";
import Logout from "./components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "/callback",
        element: <Callback/>  // Handle Keycloak callback
      },
      {
        path: "/login",
        element: <Login/> // handle login
      },
      {
        path: "/logout",
        element: <Logout/> // handle logout
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);