import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RentCar from "./pages/RentCar";
import BookCar from "./component/BookCar";

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
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/rentcar",
        element: <RentCar />,
        // children: [{ path: "/", element: <Body /> }],
      },
      {
        path: "/bookcar",
        element: <BookCar />,
        // children: [{ path: "/", element: <Body /> }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
