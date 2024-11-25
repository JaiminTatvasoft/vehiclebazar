import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import { ThemeProvider } from "@material-tailwind/react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import RentCar from "./pages/RentCar";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/login",
        element: <Login />,
        // children: [{ path: "/", element: <Body /> }],
      },
      {
        path: "/signup",
        element: <Signup />,
        // children: [{ path: "/", element: <Body /> }],
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/rentcar",
        element: <RentCar />,
        // children: [{ path: "/", element: <Body /> }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>
);

// <React.StrictMode>
/* </React.StrictMode> */
