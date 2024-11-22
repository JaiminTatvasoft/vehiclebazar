import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./component/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Body /> }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// <React.StrictMode>
/* </React.StrictMode> */
